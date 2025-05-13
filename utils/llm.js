import OpenAI from "openai";

export async function generateText(apiKey, band, year, name) {
  const openai = new OpenAI({ apiKey });

  const prompt = `Write two paragraphs about what might have happened in ${year} for the band "${band}", and include why the user named "${name}" likes them.`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 300,
  });

  return response.choices[0].message.content;
}

export async function generateImage(apiKey, band, year) {
  const openai = new OpenAI({ apiKey });

  const prompt = `An image of the band "${band}" performing or existing in the year ${year}`;

  const response = await openai.images.generate({
    prompt,
    n: 1,
    size: "512x512",
  });

  return response.data[0].url;
}
