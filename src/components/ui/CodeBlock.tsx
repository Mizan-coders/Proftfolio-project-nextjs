import { site } from "@/lib/site";

/**
 * Fake macOS code-editor window rendering a syntax-highlighted JS object.
 * Purely decorative (hero right column).
 */

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-orange-400">{children}</span>
);
const B = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-400">{children}</span>
);
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted-foreground">{children}</span>
);

export function CodeBlock() {
  return (
    <div className="font-mono text-sm">
      {/* chrome */}
      <div className="flex items-center justify-between px-1 pb-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500/90" />
          <span className="size-3 rounded-full bg-yellow-500/90" />
          <span className="size-3 rounded-full bg-green-500/90" />
        </div>
        <span className="text-sm text-muted-foreground">delivery-overview.ts</span>
      </div>

      {/* code */}
      <pre className="overflow-x-auto px-1 leading-relaxed text-[15px]">
        <code>
          <span>
            <B>const</B> <K>developer</K> <B>=</B> <B>{"{"}</B>
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>name</K>: <S>&quot;{site.name}&quot;</S>,
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>title</K>: <S>&quot;Sr. Shopify &amp; CRO Developer&quot;</S>,
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>services</K>: <B>[</B>
          </span>
          {"\n"}
          <span>
            {"    "}
            <S>&quot;Shopify Plus&quot;</S>, <S>&quot;CRO &amp; A/B testing&quot;</S>,
          </span>
          {"\n"}
          <span>
            {"    "}
            <S>&quot;Funnel optimization&quot;</S>, <S>&quot;Subscriptions&quot;</S>,
          </span>
          {"\n"}
          <span>
            {"  "}
            <B>]</B>,
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>clients</K>: <S>&quot;agencies &amp; D2C brands&quot;</S>, <C>{"// white-label"}</C>
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>collaboration</K>: <B>true</B>, <C>{"// from day one"}</C>
          </span>
          {"\n"}
          <span>
            {"  "}
            <K>response</K>: <S>&quot;within 24 hours&quot;</S>,
          </span>
          {"\n"}
          <span>
            <B>{"}"}</B>;
          </span>
        </code>
      </pre>
    </div>
  );
}
