// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class beneficiaries {
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
    this.serviceName = 'beneficiaries';
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
      instance = new beneficiaries(
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
    //appendnew_flow_beneficiaries_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: beneficiaries');
    //appendnew_flow_beneficiaries_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: beneficiaries');

    this.app['post'](
      `${this.serviceBasePath}/add-beneficiary`,
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
          bh = await this.sd_6DL7qI00vIgffYS4(bh, parentSpanInst);
          //appendnew_next_sd_uZjihpcDj2T9hvYp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uZjihpcDj2T9hvYp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-beneficiaries`,
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
          bh = await this.sd_31VbaGzn85Q3tqDT(bh, parentSpanInst);
          //appendnew_next_sd_Mpdr3I0kQDVEvP1H
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Mpdr3I0kQDVEvP1H');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_beneficiaries_HttpIn
  }
  //   service flows_beneficiaries

  //appendnew_flow_beneficiaries_start

  async sd_6DL7qI00vIgffYS4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6DL7qI00vIgffYS4',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BoWNhxCVlg65SWT5(bh, parentSpanInst);
      //appendnew_next_sd_6DL7qI00vIgffYS4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6DL7qI00vIgffYS4',
        spanInst,
        'sd_6DL7qI00vIgffYS4'
      );
    }
  }

  async sd_BoWNhxCVlg65SWT5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BoWNhxCVlg65SWT5',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'beneficiary',
        bh.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9LPqttHdSvegWlnc(bh, parentSpanInst);
      //appendnew_next_sd_BoWNhxCVlg65SWT5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BoWNhxCVlg65SWT5',
        spanInst,
        'sd_BoWNhxCVlg65SWT5'
      );
    }
  }

  async sd_9LPqttHdSvegWlnc(bh, parentSpanInst) {
    try {
      bh.web.res.status(201).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9LPqttHdSvegWlnc');
    }
  }

  async sd_31VbaGzn85Q3tqDT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_31VbaGzn85Q3tqDT',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_53fJRsiLb1uo9c4v(bh, parentSpanInst);
      //appendnew_next_sd_31VbaGzn85Q3tqDT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_31VbaGzn85Q3tqDT',
        spanInst,
        'sd_31VbaGzn85Q3tqDT'
      );
    }
  }

  async sd_53fJRsiLb1uo9c4v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_53fJRsiLb1uo9c4v',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'beneficiary',
        bh.query,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xEC3euXREW8BSl5X(bh, parentSpanInst);
      //appendnew_next_sd_53fJRsiLb1uo9c4v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_53fJRsiLb1uo9c4v',
        spanInst,
        'sd_53fJRsiLb1uo9c4v'
      );
    }
  }

  async sd_xEC3euXREW8BSl5X(bh, parentSpanInst) {
    try {
      bh.web.res.status(201).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xEC3euXREW8BSl5X');
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
  //appendnew_flow_beneficiaries_Catch
}
