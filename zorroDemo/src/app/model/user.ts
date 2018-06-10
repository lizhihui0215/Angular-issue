import { Role } from './role';

export class User {
  username: string = null;
  password: string = null;
  brithday: Date = null;
  email: string = null;
  name: string = null;
  nickname: string = null;
  phone: string = null;
  id: number = null;
  rememberMe: boolean = null;
  address: string = null;
  contact: string = null;
  area: string = null;
  wechat: string = null;
  cipherDeviceCount: number = null;
  netDeviceCount: number = null;
  customerCount: number = null;
  isLoginEnable: boolean = null;
  state: number = null;
  roles: [Role] = null;

  constructor(username?: string, password?: string,
              brithday?: Date, email?: string,
              name?: string, nickname?: string,
              phone?: string, id?: number,
              rememberMe?: boolean, address?: string,
              contact?: string, area?: string,
              wechat?: string, cipherDeviceCount?: number,
              netDeviceCount?: number, customerCount?: number,
              isLoginEnable?: boolean, state?: number) {
    this.username = username;
    this.password = password;
    this.brithday = brithday;
    this.email = email;
    this.name = name;
    this.nickname = nickname;
    this.phone = phone;
    this.id = id;
    this.rememberMe = rememberMe;
    this.address = address;
    this.contact = contact;
    this.area = area;
    this.wechat = wechat;
    this.cipherDeviceCount = cipherDeviceCount;
    this.netDeviceCount = netDeviceCount;
    this.customerCount = customerCount;
    this.isLoginEnable = isLoginEnable;
    this.state = state;
  }
}
