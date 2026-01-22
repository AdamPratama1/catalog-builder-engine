export type User = {
  username: string;
  role: "admin";
};

const AUTH_KEY = "auth.user";

export const login = (username: string, password: string): User | null => {
  if (username === "adminteamc" && password === "sgkteamc") {
    const user: User = { username, role: "admin" };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getUser = (): User | null => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

export const isLoggedIn = () => !!getUser();
export const isAdmin = () => getUser()?.role === "admin";
