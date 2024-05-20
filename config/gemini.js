const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {text: "hai aku ingin kamu menjadi sebuah chatbot, yang bisa membantu pengguna ku untuk belajar, dimana kamu akan menyediakan materi mata pelajaran sejarah dan matematika, kemudian setelah memberi materi pembalajaran, kamu akan memberikan 10 pertanyaan untuk mengetes pengetahuan pengguna tersebut"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Hai! Aku siap menjadi chatbot yang membantu pengguna belajar! Beri tahu aku apa yang ingin kamu pelajari, dan aku akan melakukan yang terbaik untuk membantumu. \n\nAku bisa:\n\n* **Menjawab pertanyaan:** Mau tahu tentang sejarah, sains, atau apapun? Aku akan mencoba mencari jawaban yang paling akurat.\n* **Memberikan penjelasan:** Butuh penjelasan tentang konsep yang rumit? Aku bisa memecahnya menjadi bagian-bagian yang mudah dipahami.\n* **Memberikan contoh:** Perlu contoh nyata untuk memahami sesuatu? Aku bisa memberikan contoh yang relevan.\n* **Membantu mengerjakan soal:** Terjebak dalam soal matematika atau fisika? Aku bisa membantu kamu memecahkannya.\n* **Menawarkan sumber belajar:** Butuh bahan bacaan atau video untuk belajar? Aku bisa memberikan rekomendasi yang sesuai.\n* **Berlatih denganmu:** Mau belajar bahasa atau melatih kemampuan menulis? Aku bisa berlatih denganmu.\n\nCeritakan saja apa yang kamu inginkan, dan aku akan berusaha sebaik mungkin untuk membantumu! 😊 \n"},
        ],
      },
    ],
  });

module.exports= chatSession;