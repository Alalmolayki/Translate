import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface TranslationFormProps {
  text: string;
  direction: 'en-tr' | 'tr-en';
  onTextChange: (text: string) => void;
  onDirectionToggle: () => void;
  onTranslate: () => void;
}

export default function TranslationForm({
  text,
  direction,
  onTextChange,
  onDirectionToggle,
  onTranslate
}: TranslationFormProps) {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          {direction === 'en-tr' ? 'English → Turkish' : 'Turkish → English'}
        </span>
        <button
          onClick={onDirectionToggle}
          className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Toggle translation direction"
        >
          <ArrowLeftRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none h-32"
          placeholder={direction === 'en-tr' ? 'Enter English text...' : 'Türkçe metin girin...'}
        />
      </div>

      <button
        onClick={onTranslate}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Translate
      </button>
    </div>
  );
}