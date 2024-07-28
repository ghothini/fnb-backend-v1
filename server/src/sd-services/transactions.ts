// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class transactions {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'transactions';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new transactions(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_transactions_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: transactions');
    //appendnew_flow_transactions_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: transactions');

    this.app['post'](
      `${this.serviceBasePath}/buy-airtime`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_rT7ThwCpaS5JPxse(bh, parentSpanInst);
          //appendnew_next_sd_1C4Nwe9ao7F3hsq4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1C4Nwe9ao7F3hsq4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-airtime/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_coguSJrtbfTHXWh0(bh, parentSpanInst);
          //appendnew_next_sd_w8wOSRwuCnPiv6FS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w8wOSRwuCnPiv6FS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/buy-electricity`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_dZo25aTLtjgTMheT(bh, parentSpanInst);
          //appendnew_next_sd_wb2oOXUMzbUbveGe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wb2oOXUMzbUbveGe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-electricity/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_BhKSkQyumrSHjcRA(bh, parentSpanInst);
          //appendnew_next_sd_cU0BRneaMINBn7sF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cU0BRneaMINBn7sF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/ewallet`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_L1EwzzCfXhgnSLL9(bh, parentSpanInst);
          //appendnew_next_sd_7us2pCh5xceVZtNJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7us2pCh5xceVZtNJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-ewallet/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_IJ6ZHsulTw4p92Ng(bh, parentSpanInst);
          //appendnew_next_sd_IUnozHk6m37zwDCR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IUnozHk6m37zwDCR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/pay`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_YOHiB4MbCiOB8MeY(bh, parentSpanInst);
          //appendnew_next_sd_Z4szROS2waxqhPbw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Z4szROS2waxqhPbw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-pay/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_BaYQ8yfdXyx0je8Q(bh, parentSpanInst);
          //appendnew_next_sd_rQDGoFTtR5HWlYIu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rQDGoFTtR5HWlYIu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_transactions_HttpIn
  }
  //   service flows_transactions

  //appendnew_flow_transactions_start

  async sd_rT7ThwCpaS5JPxse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rT7ThwCpaS5JPxse',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gkiZGJ1xmK1U2Q3i(bh, parentSpanInst);
      //appendnew_next_sd_rT7ThwCpaS5JPxse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rT7ThwCpaS5JPxse',
        spanInst,
        'sd_rT7ThwCpaS5JPxse'
      );
    }
  }

  async sd_gkiZGJ1xmK1U2Q3i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gkiZGJ1xmK1U2Q3i',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'airtime',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UTdGHExuck2tZO1P(bh, parentSpanInst);
      //appendnew_next_sd_gkiZGJ1xmK1U2Q3i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gkiZGJ1xmK1U2Q3i',
        spanInst,
        'sd_gkiZGJ1xmK1U2Q3i'
      );
    }
  }

  async sd_UTdGHExuck2tZO1P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UTdGHExuck2tZO1P',
      parentSpanInst
    );
    try {
      console.log('Data back', bh.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XXKOhfO1HFr8Pd7U(bh, parentSpanInst);
      //appendnew_next_sd_UTdGHExuck2tZO1P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UTdGHExuck2tZO1P',
        spanInst,
        'sd_UTdGHExuck2tZO1P'
      );
    }
  }

  async sd_XXKOhfO1HFr8Pd7U(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XXKOhfO1HFr8Pd7U');
    }
  }

  async sd_coguSJrtbfTHXWh0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_coguSJrtbfTHXWh0',
      parentSpanInst
    );
    try {
      bh.query = { email: bh.input.body.email };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FK4Lch4Vmid7nUUX(bh, parentSpanInst);
      //appendnew_next_sd_coguSJrtbfTHXWh0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_coguSJrtbfTHXWh0',
        spanInst,
        'sd_coguSJrtbfTHXWh0'
      );
    }
  }

  async sd_FK4Lch4Vmid7nUUX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FK4Lch4Vmid7nUUX',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'airtime',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gXQOjicncxvoLvaA(bh, parentSpanInst);
      //appendnew_next_sd_FK4Lch4Vmid7nUUX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FK4Lch4Vmid7nUUX',
        spanInst,
        'sd_FK4Lch4Vmid7nUUX'
      );
    }
  }

  async sd_gXQOjicncxvoLvaA(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gXQOjicncxvoLvaA');
    }
  }

  async sd_dZo25aTLtjgTMheT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dZo25aTLtjgTMheT',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z7jFeUcpnuHJD6XP(bh, parentSpanInst);
      //appendnew_next_sd_dZo25aTLtjgTMheT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dZo25aTLtjgTMheT',
        spanInst,
        'sd_dZo25aTLtjgTMheT'
      );
    }
  }

  async sd_z7jFeUcpnuHJD6XP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z7jFeUcpnuHJD6XP',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'electricity',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rQTLkl2rG5tC4UHG(bh, parentSpanInst);
      //appendnew_next_sd_z7jFeUcpnuHJD6XP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z7jFeUcpnuHJD6XP',
        spanInst,
        'sd_z7jFeUcpnuHJD6XP'
      );
    }
  }

  async sd_rQTLkl2rG5tC4UHG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rQTLkl2rG5tC4UHG');
    }
  }

  async sd_BhKSkQyumrSHjcRA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BhKSkQyumrSHjcRA',
      parentSpanInst
    );
    try {
      // bh.query = {"email":bh.input.body.email}
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yiVJ8tq2oaEdpTQP(bh, parentSpanInst);
      //appendnew_next_sd_BhKSkQyumrSHjcRA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BhKSkQyumrSHjcRA',
        spanInst,
        'sd_BhKSkQyumrSHjcRA'
      );
    }
  }

  async sd_yiVJ8tq2oaEdpTQP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yiVJ8tq2oaEdpTQP',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'electricity',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dmcJH32AucBFzqf8(bh, parentSpanInst);
      //appendnew_next_sd_yiVJ8tq2oaEdpTQP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yiVJ8tq2oaEdpTQP',
        spanInst,
        'sd_yiVJ8tq2oaEdpTQP'
      );
    }
  }

  async sd_dmcJH32AucBFzqf8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dmcJH32AucBFzqf8');
    }
  }

  async sd_L1EwzzCfXhgnSLL9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L1EwzzCfXhgnSLL9',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;

      console.log('bh ', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6uDZ87UHyzzoCjU0(bh, parentSpanInst);
      //appendnew_next_sd_L1EwzzCfXhgnSLL9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L1EwzzCfXhgnSLL9',
        spanInst,
        'sd_L1EwzzCfXhgnSLL9'
      );
    }
  }

  async sd_6uDZ87UHyzzoCjU0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6uDZ87UHyzzoCjU0',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'ewallet',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendEmail(bh, parentSpanInst);
      //appendnew_next_sd_6uDZ87UHyzzoCjU0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6uDZ87UHyzzoCjU0',
        spanInst,
        'sd_6uDZ87UHyzzoCjU0'
      );
    }
  }

  async sendEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'EWALLET',
        from: 'FNB',
        ptag: `<p>FNB:) ${bh.body.firstName} sent R${bh.body.amount}.
     At FNB ATM, press PROCEED, select eWallet services. Pin ${bh.body.pin},
     is valid for 16hrs. if expired, dial *120*277# for new pin</p>
    
    `,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CGcERsstH1YRXT0J(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rQsO7b0ZTw0PMisn',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sd_CGcERsstH1YRXT0J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CGcERsstH1YRXT0J',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_Y7tj22emRRoCDJdJ'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.ptag,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IK66FGMTweeP8jAM(bh, parentSpanInst);
      //appendnew_next_sd_CGcERsstH1YRXT0J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CGcERsstH1YRXT0J',
        spanInst,
        'sd_CGcERsstH1YRXT0J'
      );
    }
  }

  async sd_IK66FGMTweeP8jAM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IK66FGMTweeP8jAM');
    }
  }

  async sd_IJ6ZHsulTw4p92Ng(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IJ6ZHsulTw4p92Ng',
      parentSpanInst
    );
    try {
      bh.query = { email: bh.input.params.email };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R6jUQi6uOhsZPYTF(bh, parentSpanInst);
      //appendnew_next_sd_IJ6ZHsulTw4p92Ng
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IJ6ZHsulTw4p92Ng',
        spanInst,
        'sd_IJ6ZHsulTw4p92Ng'
      );
    }
  }

  async sd_R6jUQi6uOhsZPYTF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R6jUQi6uOhsZPYTF',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'ewallet',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lSCAJFSxnnSf9xDq(bh, parentSpanInst);
      //appendnew_next_sd_R6jUQi6uOhsZPYTF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R6jUQi6uOhsZPYTF',
        spanInst,
        'sd_R6jUQi6uOhsZPYTF'
      );
    }
  }

  async sd_lSCAJFSxnnSf9xDq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lSCAJFSxnnSf9xDq');
    }
  }

  async sd_YOHiB4MbCiOB8MeY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YOHiB4MbCiOB8MeY',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bM4bMA2ETCtbtlKf(bh, parentSpanInst);
      //appendnew_next_sd_YOHiB4MbCiOB8MeY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YOHiB4MbCiOB8MeY',
        spanInst,
        'sd_YOHiB4MbCiOB8MeY'
      );
    }
  }

  async sd_bM4bMA2ETCtbtlKf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bM4bMA2ETCtbtlKf',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'pay',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZfJZk014tsoDzNfb(bh, parentSpanInst);
      //appendnew_next_sd_bM4bMA2ETCtbtlKf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bM4bMA2ETCtbtlKf',
        spanInst,
        'sd_bM4bMA2ETCtbtlKf'
      );
    }
  }

  async sd_ZfJZk014tsoDzNfb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZfJZk014tsoDzNfb',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'Payment Made',
        from: 'FNB',
        ptag: `
    <p>Payment made +R${bh.body.amount}</p>.
    <p>Reference: ${bh.body.recipientRef}</p>.
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100">
    `,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fEAqYLJZ6RPU6T68(bh, parentSpanInst);
      //appendnew_next_sd_ZfJZk014tsoDzNfb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZfJZk014tsoDzNfb',
        spanInst,
        'sd_ZfJZk014tsoDzNfb'
      );
    }
  }

  async sd_fEAqYLJZ6RPU6T68(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fEAqYLJZ6RPU6T68',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_Y7tj22emRRoCDJdJ'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.ptag,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uWUoZHYLGbkoWv8D(bh, parentSpanInst);
      //appendnew_next_sd_fEAqYLJZ6RPU6T68
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fEAqYLJZ6RPU6T68',
        spanInst,
        'sd_fEAqYLJZ6RPU6T68'
      );
    }
  }

  async sd_uWUoZHYLGbkoWv8D(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uWUoZHYLGbkoWv8D');
    }
  }

  async sd_BaYQ8yfdXyx0je8Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BaYQ8yfdXyx0je8Q',
      parentSpanInst
    );
    try {
      // bh.query = {"email":bh.input.body.email}
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fAe39LMtHDEx6kuL(bh, parentSpanInst);
      //appendnew_next_sd_BaYQ8yfdXyx0je8Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BaYQ8yfdXyx0je8Q',
        spanInst,
        'sd_BaYQ8yfdXyx0je8Q'
      );
    }
  }

  async sd_fAe39LMtHDEx6kuL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fAe39LMtHDEx6kuL',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'pay',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_I7G2tP18SPMEf1YX(bh, parentSpanInst);
      //appendnew_next_sd_fAe39LMtHDEx6kuL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fAe39LMtHDEx6kuL',
        spanInst,
        'sd_fAe39LMtHDEx6kuL'
      );
    }
  }

  async sd_I7G2tP18SPMEf1YX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I7G2tP18SPMEf1YX');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_transactions_Catch
}
