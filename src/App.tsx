import React, { useState, useMemo, useCallback } from 'react';
import { dictionary } from './data/dictionary';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';
import CategoryFilter from './components/CategoryFilter';
import { Globe2 } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [direction, setDirection] = useState<'en-tr' | 'tr-en'>('en-tr');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => 
    Array.from(new Set(dictionary.map(entry => entry.category))),
    []
  );

  const filteredDictionary = useMemo(() => 
    selectedCategory 
      ? dictionary.filter(entry => entry.category === selectedCategory)
      : dictionary,
    [selectedCategory]
  );

  const handleTranslate = useCallback(() => {
    try {
      if (!text.trim()) {
        setError('Please enter some text to translate');
        setResult(null);
        return;
      }

      const searchText = text.toLowerCase().trim();
      const entry = filteredDictionary.find(
        direction === 'en-tr'
          ? entry => entry.english.toLowerCase() === searchText
          : entry => entry.turkish.toLowerCase() === searchText
      );

      if (entry) {
        setResult(direction === 'en-tr' ? entry.turkish : entry.english);
        setError(null);
      } else {
        setError('Word not found in dictionary');
        setResult(null);
      }
    } catch (err) {
      setError('An error occurred while translating');
      setResult(null);
    }
  }, [text, direction, filteredDictionary]);

  const toggleDirection = useCallback(() => {
    setDirection(prev => prev === 'en-tr' ? 'tr-en' : 'en-tr');
    setText('');
    setResult(null);
    setError(null);
  }, []);

  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
    setError(null);
    setResult(null);
  }, []);

  const handleCategorySelect = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setError(null);
    setResult(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe2 className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            English-Turkish Dictionary
          </h1>
          <p className="text-gray-600">
            Translate between English and Turkish with ease
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />

          <TranslationForm
            text={text}
            direction={direction}
            onTextChange={handleTextChange}
            onDirectionToggle={toggleDirection}
            onTranslate={handleTranslate}
          />

          <TranslationResult
            result={result}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;