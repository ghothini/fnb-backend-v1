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
import * as SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX from './auth'; //_splitter_
//append_imports_end
export class scan {
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
    this.serviceName = 'scan';
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
      instance = new scan(
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
    //appendnew_flow_scan_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: scan');
    //appendnew_flow_scan_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: scan');

    this.app['post'](
      `${this.serviceBasePath}/scan-payment`,
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
          bh = await this.sd_uTqAOLP9kDsUMA9U(bh, parentSpanInst);
          //appendnew_next_sd_RwvUxn1sZ64NYgYW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RwvUxn1sZ64NYgYW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-scan-payments`,
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
          bh = await this.sd_ORuWzMgWXrZsktsB(bh, parentSpanInst);
          //appendnew_next_sd_RQDnrdIjlCmdRy1T
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RQDnrdIjlCmdRy1T');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-scan/:email`,
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
          bh = await this.sd_j36y9X1Aj9vtNNCL(bh, parentSpanInst);
          //appendnew_next_sd_w5x0P7YXKkCQg11o
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_w5x0P7YXKkCQg11o');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_scan_HttpIn
  }
  //   service flows_scan

  //appendnew_flow_scan_start

  async sd_uTqAOLP9kDsUMA9U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uTqAOLP9kDsUMA9U',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iNWHAyd2lnvsRNm6(bh, parentSpanInst);
      //appendnew_next_sd_uTqAOLP9kDsUMA9U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uTqAOLP9kDsUMA9U',
        spanInst,
        'sd_uTqAOLP9kDsUMA9U'
      );
    }
  }

  async sd_iNWHAyd2lnvsRNm6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iNWHAyd2lnvsRNm6',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'scan',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_86NU4dXfB50Vuq5k(bh, parentSpanInst);
      //appendnew_next_sd_iNWHAyd2lnvsRNm6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iNWHAyd2lnvsRNm6',
        spanInst,
        'sd_iNWHAyd2lnvsRNm6'
      );
    }
  }

  async sd_86NU4dXfB50Vuq5k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_86NU4dXfB50Vuq5k',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'Payment Made',
        from: 'FNB',
        ptag: `
    <p>Payment made R${bh.body.amount}</p>.
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100">
    `,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xCLHfd1kFRljVi9Z(bh, parentSpanInst);
      //appendnew_next_sd_86NU4dXfB50Vuq5k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_86NU4dXfB50Vuq5k',
        spanInst,
        'sd_86NU4dXfB50Vuq5k'
      );
    }
  }

  async sd_xCLHfd1kFRljVi9Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xCLHfd1kFRljVi9Z',
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
      await this.sd_n4jXOMGtsaexLKge(bh, parentSpanInst);
      //appendnew_next_sd_xCLHfd1kFRljVi9Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xCLHfd1kFRljVi9Z',
        spanInst,
        'sd_xCLHfd1kFRljVi9Z'
      );
    }
  }

  async sd_n4jXOMGtsaexLKge(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n4jXOMGtsaexLKge');
    }
  }

  async sd_ORuWzMgWXrZsktsB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ORuWzMgWXrZsktsB',
      parentSpanInst
    );
    try {
      bh.query = { email: bh.input.body.email };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_m5UC8jWaKVZDLlzN(bh, parentSpanInst);
      //appendnew_next_sd_ORuWzMgWXrZsktsB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ORuWzMgWXrZsktsB',
        spanInst,
        'sd_ORuWzMgWXrZsktsB'
      );
    }
  }

  async sd_m5UC8jWaKVZDLlzN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m5UC8jWaKVZDLlzN',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance: SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth =
        SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance.checkIfExist(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pcg4qrooMD5YKL3y(bh, parentSpanInst);
      //appendnew_next_sd_m5UC8jWaKVZDLlzN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m5UC8jWaKVZDLlzN',
        spanInst,
        'sd_m5UC8jWaKVZDLlzN'
      );
    }
  }

  async sd_pcg4qrooMD5YKL3y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pcg4qrooMD5YKL3y',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Tf9eXOEaV8HV5Nij(bh, parentSpanInst);
      } else {
        bh = await this.sd_d3PgrIzjt8eIdH3i(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pcg4qrooMD5YKL3y',
        spanInst,
        'sd_pcg4qrooMD5YKL3y'
      );
    }
  }

  async sd_Tf9eXOEaV8HV5Nij(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Tf9eXOEaV8HV5Nij',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XU9Uu4adCscg58C3(bh, parentSpanInst);
      //appendnew_next_sd_Tf9eXOEaV8HV5Nij
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Tf9eXOEaV8HV5Nij',
        spanInst,
        'sd_Tf9eXOEaV8HV5Nij'
      );
    }
  }

  async sd_XU9Uu4adCscg58C3(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XU9Uu4adCscg58C3');
    }
  }

  async sd_d3PgrIzjt8eIdH3i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d3PgrIzjt8eIdH3i',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        message: '0 scan payments found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XU9Uu4adCscg58C3(bh, parentSpanInst);
      //appendnew_next_sd_d3PgrIzjt8eIdH3i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d3PgrIzjt8eIdH3i',
        spanInst,
        'sd_d3PgrIzjt8eIdH3i'
      );
    }
  }

  async sd_j36y9X1Aj9vtNNCL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j36y9X1Aj9vtNNCL',
      parentSpanInst
    );
    try {
      // bh.query = {"email":bh.input.body.email}
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oqCwEQkJX5MXrSdk(bh, parentSpanInst);
      //appendnew_next_sd_j36y9X1Aj9vtNNCL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j36y9X1Aj9vtNNCL',
        spanInst,
        'sd_j36y9X1Aj9vtNNCL'
      );
    }
  }

  async sd_oqCwEQkJX5MXrSdk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oqCwEQkJX5MXrSdk',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'scan',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bBQybBFicmt1GA8S(bh, parentSpanInst);
      //appendnew_next_sd_oqCwEQkJX5MXrSdk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oqCwEQkJX5MXrSdk',
        spanInst,
        'sd_oqCwEQkJX5MXrSdk'
      );
    }
  }

  async sd_bBQybBFicmt1GA8S(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bBQybBFicmt1GA8S');
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
  //appendnew_flow_scan_Catch
}
