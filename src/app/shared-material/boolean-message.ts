export class BooleanMessage {
  IsSuccess: boolean;
  Message: string;

  constructor(succ: boolean, msg: string) {
    this.IsSuccess = succ;
    this.Message = msg;
  }

  static CreateSuccess(msg: string): BooleanMessage {
    return new BooleanMessage(true, msg);
  }

  static CreateFail(msg: string): BooleanMessage {
    return new BooleanMessage(false, msg);
  }
}
