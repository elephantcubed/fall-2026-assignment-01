export type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  }
};

export class UserRegistry {
  public users: UserAccount[] = [];
  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const user: UserAccount = {
      id: String(this.users.length),
      createdAt: new Date(),
      ...data
    }
    this.users.push(user);
    return user;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    for (const user of this.users) {
      if (user.id == id) {
        return Object.freeze({
          id: user.id,
          email: user.email,
          profile: user.profile
        }
      )}
    };
    return undefined;
  }
}