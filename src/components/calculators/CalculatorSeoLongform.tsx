import type { CalculatorRegistryItem } from "@/lib/calculators/types";

function categoryLabel(category: CalculatorRegistryItem["category"]) {
  switch (category) {
    case "tax":
      return "tax";
    case "loan":
      return "loan";
    case "investment":
      return "investment";
    case "interest":
      return "interest";
    case "shopping":
      return "shopping";
    case "math":
      return "math";
    case "business":
      return "business";
    default:
      return "finance";
  }
}

function canonicalUrl(calculator: CalculatorRegistryItem) {
  // Avoid importing siteConfig here to keep this component purely presentational.
  return calculator.seo.canonicalPath;
}

export default function CalculatorSeoLongform({
  calculator,
}: {
  calculator: CalculatorRegistryItem;
}) {
  const label = categoryLabel(calculator.category);
  const faqs = calculator.faqs ?? [];
  const primaryKeyword = calculator.seo.keywords?.[0] ?? calculator.name;

  return (
    <section className="surface-panel rounded-[2rem] p-6 md:p-8">
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <h2>Guide: {calculator.name}</h2>
        <p>
          {calculator.name} is built for people who want a reliable, fast way to
          compute results without juggling spreadsheets, round-tripping between
          apps, or second-guessing formulas. Whether you landed here searching
          for “{primaryKeyword}” or you simply need a quick answer, the goal is
          the same: you enter a few inputs, you get a clean breakdown, and you
          understand what the numbers mean. This page also explains the logic
          behind the calculation, the typical assumptions used in India-focused
          {label} workflows, and how to sanity-check the output before you share
          it with a client, vendor, lender, or teammate.
        </p>

        <h3>What This Calculator Helps You Do</h3>
        <p>
          Think of this tool as two parts working together: a calculation engine
          and an explanation layer. The engine handles the arithmetic and
          converts your inputs into a result. The explanation layer helps you
          interpret the result, choose the right inputs, and avoid common
          mistakes that lead to wrong conclusions. For example, small differences
          in whether a number is “inclusive” or “exclusive”, whether a rate is
          annual or monthly, or whether you should round at the line-item level
          can noticeably change the final value. This guide gives you practical
          checkpoints so the output remains consistent with how numbers are used
          in day-to-day {label} decisions.
        </p>

        <h3>How To Use It (Fast, Repeatable Steps)</h3>
        <ol>
          <li>
            Start with the intent: decide whether you’re working from a base
            value, a final total, or a target outcome (such as a desired profit
            margin or an affordable monthly payment).
          </li>
          <li>
            Enter the inputs exactly as you would write them on an invoice,
            quotation, loan sheet, or investment note. Use the same units (₹,
            %, months, years) consistently.
          </li>
          <li>
            Check the breakdown, not only the headline number. A correct result
            usually comes with a sensible split (tax parts, interest parts,
            discount components, or totals).
          </li>
          <li>
            Re-run with a small variation (for example, +0.5% rate or +1 month).
            If the result behaves in the direction you expect, you can trust the
            setup.
          </li>
          <li>
            Save or copy the result for your records and, if needed, move to a
            related calculator for the next step in your workflow.
          </li>
        </ol>

        <h3>Inputs You Should Double-Check</h3>
        <p>
          Most “wrong answers” happen because of input interpretation, not
          because the math is hard. Before you rely on the output, confirm these
          basics. Is the amount you entered a base amount (before tax) or an
          inclusive amount (after tax)? Is the rate you entered the rate you
          actually pay (effective) or the rate quoted in marketing (nominal)?
          Is the period measured in months, years, or days? And are you mixing a
          percentage like 12% with a decimal like 0.12? Being strict with these
          details is the fastest way to make {calculator.name} match the numbers
          you see in real documents.
        </p>

        <h3>Understanding The Result</h3>
        <p>
          A good calculator result should answer three questions: what is the
          final number, what are the components that add up to it, and what
          assumptions are implied. For tax calculations, that typically means a
          base amount, a tax amount, and a total amount, sometimes with a split
          across IGST/CGST/SGST depending on the context. For loan and interest
          calculations, it usually means the periodic payment or final value, a
          total interest figure, and an effective rate per period. For
          shopping/business calculations, it often means the original value, the
          change (discount, margin, profit/loss), and the resulting price. When
          you can explain each component in one sentence, you know the setup is
          correct.
        </p>

        <h3>When This Tool Is Useful</h3>
        <p>
          This calculator is designed for real-world decision points: creating a
          quote, validating an invoice, estimating affordability, comparing two
          offers, setting a selling price, or communicating a number clearly.
          Use it when you need speed with clarity. Use it again when you need a
          second opinion on a sheet that “looks right” but might hide a unit
          mismatch. And use it when you want a standardized calculation you can
          repeat across multiple transactions, leads, or scenarios without
          rewriting formulas each time.
        </p>

        <h3>Practical Tips (So The Numbers Stay Realistic)</h3>
        <ul>
          <li>
            Keep a baseline example you trust (one real invoice/loan/quote) and
            compare new runs to it when something seems off.
          </li>
          <li>
            Round only at the final step unless you have to match a document
            that rounds line-items. Different rounding points can change totals.
          </li>
          <li>
            Treat rates and periods as a pair. A monthly period needs a monthly
            rate (or a clear conversion from annual to monthly).
          </li>
          <li>
            If you’re comparing two scenarios, change only one input at a time
            so you can see what actually caused the difference.
          </li>
        </ul>

        <h3>Common Mistakes (And How To Avoid Them)</h3>
        <p>
          The most common mistake is mixing inclusive and exclusive amounts. For
          example, entering a tax-inclusive total into a field meant for base
          value will inflate the result, and the error can be hard to spot if
          the tax rate is small. Another frequent issue is choosing the wrong
          time basis (monthly vs yearly) in interest-based calculations. A third
          issue is interpreting “margin” and “markup” as the same concept-many
          business calculations differ depending on which definition you use.
          Finally, users sometimes copy numbers with commas/spaces or currency
          symbols that look fine visually but should be typed as plain digits.
          If a result looks surprising, start by checking these four areas.
        </p>

        <h3>Quick Self-Checks</h3>
        <ul>
          <li>
            Direction check: if you increase the rate, the tax/interest component
            should increase too.
          </li>
          <li>
            Boundary check: if the rate is 0%, the extra component should be 0
            and total should equal base.
          </li>
          <li>
            Scale check: if you double the base value, most outputs should
            double (unless there is a threshold or step rule).
          </li>
          <li>
            Reality check: compare against a known document or a small manual
            calculation for one example.
          </li>
        </ul>

        <h3>Examples You Can Adapt</h3>
        <p>
          If you’re new to {label} calculators, start with a simple example and
          scale it up. Use a round base value (like ₹10,000) and a familiar rate
          (like 5%, 12%, or 18% depending on your context) so you can reason
          about the result quickly. Once you get the expected output, replace
          the base value with your real number. For loans, use a short tenure
          first and observe how tenure changes the interest component. For
          discounts or margins, test two scenarios-one conservative and one
          aggressive-so you can see how sensitive the outcome is to small input
          changes.
        </p>

        <h3>FAQ Notes</h3>
        {faqs.length ? (
          <>
            <p>
              The questions below are the ones users ask most often. Read them
              as “input rules” and “interpretation rules”: they help you choose
              the right numbers to enter and understand what the calculator is
              returning.
            </p>
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
                <p>
                  If you want to validate this quickly, plug in one simple value
                  and see whether the component split matches your expectation.
                  A calculator should feel predictable: small input changes
                  should cause small, explainable output changes.
                </p>
              </div>
            ))}
          </>
        ) : (
          <p>
            This calculator keeps the interface minimal, so you can get answers
            quickly. If you want more confidence, use the self-checks above:
            they are reliable across most {label} calculations and will catch
            unit mismatches early.
          </p>
        )}

        <h3>Glossary (Simple Definitions)</h3>
        <p>
          Base amount: the starting value before additions like tax, interest,
          or fees. Total amount: the final payable/receivable value after all
          components are applied. Rate: a percentage used to compute the
          component amount. Period: the time unit used with the rate (month,
          year, day). Inclusive: a number that already includes the component
          (for example, a tax-inclusive total). Exclusive: a number that excludes
          the component (for example, a pre-tax base). Rounding: the rule used
          to represent decimals in a final figure; rounding at different stages
          can change totals slightly.
        </p>

        <h3>Shareable Summary</h3>
        <p>
          If you need to explain your result to someone else, use this simple
          structure: “I started with a base of X, applied a rate of Y over Z, and
          the calculator returned a component of A and a final total of B.” That
          one sentence is usually enough to make your calculation reviewable.
          When numbers are reviewable, they are easier to approve, easier to
          audit, and easier to defend in client conversations. For quick access
          later, bookmark {canonicalUrl(calculator)} and keep the input rules
          consistent across your documents.
        </p>
      </div>
    </section>
  );
}
