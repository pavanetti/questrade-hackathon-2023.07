export const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
export const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
export const DOC_REGEX = new RegExp(`${CPF_REGEX.source}|${CNPJ_REGEX.source}`);
