import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})


// import { openai } from "./openai";

// export const vectorize = async (input: string): Promise<number[]> => {
//   const embeddingResponse = await openai.embeddings.create({
//     input,
//     model: "text-embedding-ada-002", // 1536 dimensions
//   });
//   return embeddingResponse.data[0].embedding;
// };
