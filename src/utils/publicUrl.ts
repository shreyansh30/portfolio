const BASE = import.meta.env.BASE_URL;

export const publicUrl = (path: string) => {
  return `${BASE}${path.replace(/^\/+/, "")}`;
};