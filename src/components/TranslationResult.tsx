import React from 'react';

interface TranslationResultProps {
  result: string | null;
  error: string | null;
}

export default function TranslationResult({ result, error }: TranslationResultProps) {
  if (!result && !error) return null;

  return (
    <div className="w-full max-w-md mt-8">
      {error ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      ) : (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Translation</h3>
          <p className="text-lg text-gray-900">{result}</p>
        </div>
      )}
    </div>
  );
}