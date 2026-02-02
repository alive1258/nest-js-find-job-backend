export enum Permission {
  /* =========================
     AWS IAM–style mental models
     User Management 
  ========================= */
  USER_CREATE = 'user:create',
  USER_READ = 'user:read',
  USER_UPDATE = 'user:update',
  USER_DELETE = 'user:delete',
  USER_MANAGE = 'user:*',

  /* =========================
     Content Management
  ========================= */
  CONTENT_CREATE = 'content:create',
  CONTENT_READ = 'content:read',
  CONTENT_UPDATE = 'content:update',
  CONTENT_DELETE = 'content:delete',
  CONTENT_MANAGE = 'content:*',
  /* =========================
     CATEGORY Management
  ========================= */
  CATEGORY_CREATE = 'category:create',
  CATEGORY_READ = 'category:read',
  CATEGORY_UPDATE = 'category:update',
  CATEGORY_DELETE = 'category:delete',
  CATEGORY_MANAGE = 'category:*',

  /* =========================
     BusinessWeCover Management
  ========================= */
  BUSINESS_WC_CREATE = 'business-we-cover:create',
  BUSINESS_WC_READ = 'business-we-cover:read',
  BUSINESS_WC_UPDATE = 'business-we-cover:update',
  BUSINESS_WC_DELETE = 'business-we-cover:delete',
  BUSINESS_WC_MANAGE = 'business-we-cover:*',

  /* =========================
   Why Choose Us Management
========================= */
  WHY_CHOOSE_US_CREATE = 'why-choose-us:create',
  WHY_CHOOSE_US_READ = 'why-choose-us:read',
  WHY_CHOOSE_US_UPDATE = 'why-choose-us:update',
  WHY_CHOOSE_US_DELETE = 'why-choose-us:delete',
  WHY_CHOOSE_US_MANAGE = 'why-choose-us:*',

  /* =========================
   Pricings Management
========================= */
  PRICINGS_CREATE = 'pricings:create',
  PRICINGS_READ = 'pricings:read',
  PRICINGS_UPDATE = 'pricings:update',
  PRICINGS_DELETE = 'pricings:delete',
  PRICINGS_MANAGE = 'pricings:*',

  /* =========================
   Pricing Category Management
========================= */
  PRICING_CATEGORY_CREATE = 'pricing-category:create',
  PRICING_CATEGORY_READ = 'pricing-category:read',
  PRICING_CATEGORY_UPDATE = 'pricing-category:update',
  PRICING_CATEGORY_DELETE = 'pricing-category:delete',
  PRICING_CATEGORY_MANAGE = 'pricing-category:*',

  /* =========================
   Pricing Feature Management
========================= */
  PRICING_FEATURE_CREATE = 'pricing-feature:create',
  PRICING_FEATURE_READ = 'pricing-feature:read',
  PRICING_FEATURE_UPDATE = 'pricing-feature:update',
  PRICING_FEATURE_DELETE = 'pricing-feature:delete',
  PRICING_FEATURE_MANAGE = 'pricing-feature:*',

  /* =========================
   Service Management
========================= */
  SERVICES_CREATE = 'services:create',
  SERVICES_READ = 'services:read',
  SERVICES_UPDATE = 'services:update',
  SERVICES_DELETE = 'services:delete',
  SERVICES_MANAGE = 'services:*',

  /* =========================
   Assign Pricing Feature Management
========================= */
  ASSIGEN_PRICING_FEATURE_CREATE = 'assigen-pricing-features:create',
  ASSIGEN_PRICEN_FEATURE_READ = 'assigen-pricing-features:read',
  ASSIGEN_PRICEN_FEATURE_UPDATE = 'assigen-pricing-features:update',
  ASSIGEN_PRICEN_FEATURE_DELETE = 'assigen-pricing-features:delete',
  ASSIGEN_PRICEN_FEATURE_MANAGE = 'assigen-pricing-features:*',

  /* =========================
     Product Management
  ========================= */
  PRODUCT_CREATE = 'product:create',
  PRODUCT_READ = 'product:read',
  PRODUCT_UPDATE = 'product:update',
  PRODUCT_DELETE = 'product:delete',
  PRODUCT_REVIEW = 'product:review',
  PRODUCT_MANAGE = 'product:*',

  /* =========================
     Profile
  ========================= */
  PROFILE_READ = 'profile:read',
  PROFILE_UPDATE = 'profile:update',

  /* =========================
     Media Management
  ========================= */
  MEDIA_UPLOAD = 'media:upload',
  MEDIA_READ = 'media:read',
  MEDIA_DELETE = 'media:delete',
  MEDIA_MANAGE = 'media:*',

  /* =========================
     Lead / Enquiry Management
  ========================= */
  LEAD_READ = 'lead:read',
  LEAD_UPDATE = 'lead:update',
  LEAD_DELETE = 'lead:delete',

  ENQUIRY_READ = 'enquiry:read',
  ENQUIRY_REPLY = 'enquiry:reply',
  ENQUIRY_DELETE = 'enquiry:delete',

  /* =========================
     Order & Payment
  ========================= */
  ORDER_READ = 'order:read',
  ORDER_UPDATE = 'order:update',
  ORDER_DELETE = 'order:delete',

  PAYMENT_READ = 'payment:read',
  PAYMENT_UPDATE = 'payment:update',
  PAYMENT_DELETE = 'payment:delete',

  /* =========================
     Settings
  ========================= */
  SETTINGS_READ = 'settings:read',
  SETTINGS_UPDATE = 'settings:update',

  /* =========================
     Analytics & Export
  ========================= */
  ANALYTICS_READ = 'analytics:read',
  DATA_EXPORT = 'data:export',

  /* =========================
     System Administration
  ========================= */
  SYSTEM_READ = 'system:read',
  SYSTEM_UPDATE = 'system:update',
  SYSTEM_MANAGE = 'system:*',

  BULK_OPERATION = 'system:bulk-operation',
}
