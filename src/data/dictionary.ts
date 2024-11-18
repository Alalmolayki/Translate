export type DictionaryEntry = {
  english: string;
  turkish: string;
  category: string;
};

export const dictionary: DictionaryEntry[] = [
  // Daily Conversation
  { english: "hello", turkish: "merhaba", category: "daily" },
  { english: "goodbye", turkish: "hoşça kal", category: "daily" },
  { english: "please", turkish: "lütfen", category: "daily" },
  { english: "thank you", turkish: "teşekkür ederim", category: "daily" },
  { english: "you're welcome", turkish: "rica ederim", category: "daily" },
  { english: "good morning", turkish: "günaydın", category: "daily" },
  { english: "good night", turkish: "iyi geceler", category: "daily" },

  // Numbers
  { english: "one", turkish: "bir", category: "numbers" },
  { english: "two", turkish: "iki", category: "numbers" },
  { english: "three", turkish: "üç", category: "numbers" },
  { english: "four", turkish: "dört", category: "numbers" },
  { english: "five", turkish: "beş", category: "numbers" },

  // Colors
  { english: "red", turkish: "kırmızı", category: "colors" },
  { english: "blue", turkish: "mavi", category: "colors" },
  { english: "green", turkish: "yeşil", category: "colors" },
  { english: "yellow", turkish: "sarı", category: "colors" },
  { english: "black", turkish: "siyah", category: "colors" },

  // Food and Drinks
  { english: "water", turkish: "su", category: "food" },
  { english: "bread", turkish: "ekmek", category: "food" },
  { english: "coffee", turkish: "kahve", category: "food" },
  { english: "tea", turkish: "çay", category: "food" },
  { english: "apple", turkish: "elma", category: "food" },

  // Family Members
  { english: "mother", turkish: "anne", category: "family" },
  { english: "father", turkish: "baba", category: "family" },
  { english: "sister", turkish: "kız kardeş", category: "family" },
  { english: "brother", turkish: "erkek kardeş", category: "family" },
  { english: "grandmother", turkish: "büyükanne", category: "family" },

  // Time Expressions
  { english: "today", turkish: "bugün", category: "time" },
  { english: "tomorrow", turkish: "yarın", category: "time" },
  { english: "yesterday", turkish: "dün", category: "time" },
  { english: "now", turkish: "şimdi", category: "time" },
  { english: "later", turkish: "sonra", category: "time" },

  // Transportation
  { english: "car", turkish: "araba", category: "transport" },
  { english: "bus", turkish: "otobüs", category: "transport" },
  { english: "train", turkish: "tren", category: "transport" },
  { english: "airplane", turkish: "uçak", category: "transport" },
  { english: "bicycle", turkish: "bisiklet", category: "transport" },

  // Weather
  { english: "sunny", turkish: "güneşli", category: "weather" },
  { english: "rainy", turkish: "yağmurlu", category: "weather" },
  { english: "cloudy", turkish: "bulutlu", category: "weather" },
  { english: "cold", turkish: "soğuk", category: "weather" },
  { english: "hot", turkish: "sıcak", category: "weather" }
];