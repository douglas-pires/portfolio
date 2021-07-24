import { CustomFormats, useIntl } from 'gatsby-plugin-intl';

type PrimitiveType = string | number | boolean | null | undefined | Date;

export type TranslateFunction = (
  id: string,
  params?: Record<string, PrimitiveType>,
) => string;

interface Translation {
  t: TranslateFunction;
  locale: string;
  defaultLocale: string;
  defaultFormats: CustomFormats;
}

export default function useTranslation(): Translation {
  const { formatMessage, locale, defaultLocale, defaultFormats } = useIntl();

  function t(id: string, params?: Record<string, PrimitiveType>): string {
    return formatMessage({ id, defaultMessage: '' }, params);
  }

  return { t, locale, defaultLocale, defaultFormats };
}
