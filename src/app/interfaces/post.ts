import { IBase } from './base';
import { ITheme } from './theme';
import { IUser } from './user';

export interface IPost extends IBase {
  likes: string[];
  text: string;
  userID: IUser;
  themeId: ITheme;


}
