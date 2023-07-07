export interface IUser {
  createdAt: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  uid: string;
  photoUrl: string;
}

export interface IUserStore {
  user: IUser | undefined;
  setUser: (user: IUserStore["user"]) => void;
}
