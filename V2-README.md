# Maths Desk V2 — School + Competition Learning Engine

## What ships
- **School Success**: 18 original Stage 8 practice questions across integers, fractions, percentages, algebra, ratio, geometry, sequences, probability and data.
- **Competition**: 16 reasoning-focused questions across number sense, counting, probability, patterns, and problem-solving.
- Adaptive practice, unseen-question diagnostics, due-revision practice and 12-minute timed challenges.
- Hint-first retries and skill-specific **candidate** misconception labels (not a verified diagnosis of the student's reasoning).
- Browser-local study history, revision scheduling, independent-answer evidence, simple skill summary and JSON export.
- The existing curriculum selector, optional ElevenLabs voice and previous V1 data remain untouched. The page loads V2 in place of the previous practice module.

## Try it
1. Launch `index.html` on a local server or after merging into GitHub Pages.
2. Choose **School Success → Unseen diagnostic**, press **Start session**, answer or skip each question.
3. Enter an intentionally incorrect answer and verify the tutor offers a retry without giving away the final answer. Use **Skip & reveal** only when desired.
4. Open the **Competition** track and start **Timed challenge**; the countdown ends after 12 minutes.
5. Use **Due revisions**. Questions recur based on simple 1-, 3-, or 7-day intervals and prior performance.
6. Refresh and verify Learning evidence persists; export the JSON and inspect `attempts` and `sessions`.
7. Enable ElevenLabs only when desired; written V2 practice does not call a paid model or require any API key.

## Validation
Run `node tests/v2-smoke.mjs`. This checks bank structure, representative answers, key wiring and feature presence. It **does not replace browser, learning-outcome or voice end-to-end testing**.

## What is *not* in V2 yet
- LLM-generated Socratic tutoring, step-by-step handwritten work analysis, or exam-paper image ingestion.
- Parent accounts, synchronized cloud records, certified child-data safeguards or parental authentication.
- Full Cambridge curriculum coverage, validated AMC/SOF exam equivalence, broad assessment reliability, or actual marks improvement.
- The simple adaptive algorithm is experimental and needs a larger question bank before mastery claims.
- `diagnostic` picks previously unseen bank questions; when used up, switch to adaptive practice. It is not a psychometrically equated assessment.

## Privacy and authorship
The app stores V2 learning attempts in browser `localStorage` under `maths-desk-v2`. Do not enter personal identifying information into question answers. The legacy memory and the ElevenLabs agent have separate storage and deletion controls. A student's portfolio should distinguish their own work, adult-supported architecture, and AI-assisted code.
