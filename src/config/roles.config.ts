import { Permission } from 'src/auth/enums/permission-type.enum';
import { Role } from 'src/auth/enums/role-type.enum';

// Role hierarchy definition
export const RoleHierarchy: Record<Role, readonly Role[]> = {
  [Role.SUPER_ADMIN]: [Role.ADMIN],
  [Role.ADMIN]: [Role.MANAGER],
  [Role.MANAGER]: [Role.PREMIUM_USER],
  [Role.PREMIUM_USER]: [Role.USER],
  [Role.USER]: [],
} as const;

// Role-based permissions definition. role hierarchy (inheritance) SUPER_ADMIN > ADMIN > MANAGER > PREMIUM_USER > USER
export const RoleBasedPermissions: Record<Role, Permission[]> = {
  [Role.SUPER_ADMIN]: [],

  [Role.ADMIN]: [
    Permission.USER_MANAGE,
    Permission.CONTENT_MANAGE,
    Permission.PRODUCT_MANAGE,
    Permission.MEDIA_MANAGE,

    Permission.CATEGORY_CREATE,
    Permission.CATEGORY_READ,
    Permission.CATEGORY_UPDATE,
    Permission.CATEGORY_DELETE,

    Permission.BUSINESS_WC_CREATE,
    Permission.BUSINESS_WC_READ,
    Permission.BUSINESS_WC_UPDATE,
    Permission.BUSINESS_WC_DELETE,

    Permission.WHY_CHOOSE_US_CREATE,
    Permission.WHY_CHOOSE_US_READ,
    Permission.WHY_CHOOSE_US_UPDATE,
    Permission.WHY_CHOOSE_US_DELETE,
    Permission.WHY_CHOOSE_US_MANAGE,

    Permission.PRICINGS_CREATE,
    Permission.PRICINGS_READ,
    Permission.PRICINGS_UPDATE,
    Permission.PRICINGS_DELETE,
    Permission.PRICINGS_MANAGE,

    Permission.PRICING_CATEGORY_CREATE,
    Permission.PRICING_CATEGORY_READ,
    Permission.PRICING_CATEGORY_UPDATE,
    Permission.PRICING_CATEGORY_DELETE,
    Permission.PRICING_CATEGORY_MANAGE,

    Permission.PRICING_FEATURE_CREATE,
    Permission.PRICING_FEATURE_READ,
    Permission.PRICING_FEATURE_UPDATE,
    Permission.PRICING_FEATURE_DELETE,
    Permission.PRICING_FEATURE_MANAGE,

    Permission.SERVICES_CREATE,
    Permission.SERVICES_READ,
    Permission.SERVICES_UPDATE,
    Permission.SERVICES_DELETE,
    Permission.SERVICES_MANAGE,

    Permission.ASSIGEN_PRICING_FEATURE_CREATE,
    Permission.ASSIGEN_PRICEN_FEATURE_READ,
    Permission.ASSIGEN_PRICEN_FEATURE_UPDATE,
    Permission.ASSIGEN_PRICEN_FEATURE_DELETE,

    Permission.LEAD_READ,
    Permission.LEAD_UPDATE,
    Permission.LEAD_DELETE,
    Permission.ENQUIRY_READ,
    Permission.ENQUIRY_REPLY,
    Permission.ENQUIRY_DELETE,

    Permission.ORDER_READ,
    Permission.ORDER_UPDATE,
    Permission.ORDER_DELETE,
    Permission.PAYMENT_READ,
    Permission.PAYMENT_UPDATE,
    Permission.PAYMENT_DELETE,

    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,

    Permission.SETTINGS_READ,
    Permission.SETTINGS_UPDATE,
    Permission.ANALYTICS_READ,
    Permission.DATA_EXPORT,

    Permission.SYSTEM_READ,
    Permission.SYSTEM_UPDATE,
    Permission.BULK_OPERATION,
  ],

  [Role.MANAGER]: [
    Permission.CONTENT_READ,
    Permission.CONTENT_UPDATE,

    Permission.PRODUCT_READ,
    Permission.PRODUCT_UPDATE,
    Permission.PRODUCT_REVIEW,

    Permission.LEAD_READ,
    Permission.LEAD_UPDATE,
    Permission.ENQUIRY_READ,
    Permission.ENQUIRY_REPLY,

    Permission.ORDER_READ,
    Permission.ORDER_UPDATE,

    Permission.ANALYTICS_READ,
  ],

  [Role.PREMIUM_USER]: [
    Permission.CONTENT_READ,
    Permission.PRODUCT_READ,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
  ],

  [Role.USER]: [
    Permission.CONTENT_READ,
    Permission.PRODUCT_READ,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
  ],
};
