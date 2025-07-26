import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  }

  async generateLandingPage(prompt: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent([
      `Generate a modern, responsive HTML5 landing page with no images and no markdown for the following business concept: "${prompt}". The design should follow best UX/UI practices and include the following clearly separated sections: A clean and sticky header with navigation links. A hero section with a catchy headline and a short description. An About Us section explaining the mission and services. A Contact Us section with sample address, phone, and email fields. A simple, well-structured footer with copyright. Use semantic HTML elements and inline CSS (or a <style> block in the <head>) with modern, clean styling. Ensure all text is readable, layout is mobile-friendly, and the page has smooth vertical structure. Do not include markdown, comments, or placeholder images.`,
    ]);

    const response = await result.response;
    const raw = response.text();

    return this.cleanHtmlResponse(raw);
  }

  private cleanHtmlResponse(raw: string): string {
    return raw
      .replace(/^```html/, '')
      .replace(/^```/, '')
      .trim();
  }
}
