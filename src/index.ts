// x402-seo-keyword-data: the keywords.duoleads.com client of duo-data-utilities, published on its own.
// The shared client code lives in src/lib (generated from https://github.com/hiesem/duo-data-utilities).
export {
  assertKeywordsPath,
  buildKeywordsQuery,
  createKeywordsClient,
  createKeywordsClient as createClient,
  DEFAULT_KEYWORDS_BASE_URL,
  DEFAULT_KEYWORDS_MAX_PRICE_USD,
  KEYWORDS_MAX_ROUTE_PRICE_USD,
  KEYWORDS_MCP_URL,
  KEYWORDS_ROUTES,
} from "./lib/keywords.js";
export type {
  InterestByRegionData,
  KeywordIdeasData,
  KeywordIdeasParams,
  KeywordMarket,
  KeywordMetrics,
  KeywordOverviewData,
  KeywordOverviewParams,
  KeywordsClient,
  KeywordsClientOptions,
  KeywordsPaidResult,
  KeywordsRoute,
  RelatedQueriesData,
  SearchVolumeParams,
  TrendData,
  TrendsParams,
  TrendsTimeframe,
} from "./lib/keywords.js";
export * from "./lib/seo-generated.js";
export { DuoApiError, PriceGuardError } from "./lib/errors.js";
export { BASE_NETWORK, BASE_USDC_ADDRESS } from "./lib/price-guard.js";
export type { EvmSigner, SettlementReceipt } from "./lib/transport.js";
export { SDK_USER_AGENT, SDK_VERSION } from "./lib/version.js";
