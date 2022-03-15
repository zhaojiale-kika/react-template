import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export default{
  'POST /api/currentUserInfo': async (req: Request, res: Response) => {
    const { token } = req.body;
    await waitTime(2000);
    res.send({
      code: '200',
      message:'',
      data:{
        name:'demo1',
        avatar:'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        role:['theme','sticker']
      }
    });

  }

}
