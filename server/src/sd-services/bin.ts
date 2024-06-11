// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX from './auth'; //_splitter_
//append_imports_end
export class bin {
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
    this.serviceName = 'bin';
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
      instance = new bin(
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
    //appendnew_flow_bin_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: bin');
    //appendnew_flow_bin_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: bin');

    this.app['post'](
      `${this.serviceBasePath}/add-to-bin`,
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
          bh = await this.sd_xi9TYiguMYVXmLMe(bh, parentSpanInst);
          //appendnew_next_sd_aho6HdmQRPAH9S5e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aho6HdmQRPAH9S5e');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-bin`,
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
          bh = await this.sd_mTLNV3ByYE3n7fCk(bh, parentSpanInst);
          //appendnew_next_sd_xnE5fj8PTyXxK2gx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xnE5fj8PTyXxK2gx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_bin_HttpIn
  }
  //   service flows_bin

  //appendnew_flow_bin_start

  async sd_xi9TYiguMYVXmLMe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xi9TYiguMYVXmLMe',
      parentSpanInst
    );
    try {
      bh.collection = 'bin-applications';
      bh.body = {
        ...bh.input.body,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bXbDFf64lIipINwN(bh, parentSpanInst);
      //appendnew_next_sd_xi9TYiguMYVXmLMe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xi9TYiguMYVXmLMe',
        spanInst,
        'sd_xi9TYiguMYVXmLMe'
      );
    }
  }

  async sd_bXbDFf64lIipINwN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bXbDFf64lIipINwN',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GikFSxwoxBI0AaAN(bh, parentSpanInst);
      //appendnew_next_sd_bXbDFf64lIipINwN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bXbDFf64lIipINwN',
        spanInst,
        'sd_bXbDFf64lIipINwN'
      );
    }
  }

  async sd_GikFSxwoxBI0AaAN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GikFSxwoxBI0AaAN',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Aqd0xZree5Ceyb8K(bh, parentSpanInst);
      //appendnew_next_sd_GikFSxwoxBI0AaAN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GikFSxwoxBI0AaAN',
        spanInst,
        'sd_GikFSxwoxBI0AaAN'
      );
    }
  }

  async sd_Aqd0xZree5Ceyb8K(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Aqd0xZree5Ceyb8K');
    }
  }

  async sd_mTLNV3ByYE3n7fCk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mTLNV3ByYE3n7fCk',
      parentSpanInst
    );
    try {
      bh.collection = 'bin-applications';
      bh.search = {
        collection: 'bin-applications',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ooMu5H8zQcCoxSbp(bh, parentSpanInst);
      //appendnew_next_sd_mTLNV3ByYE3n7fCk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mTLNV3ByYE3n7fCk',
        spanInst,
        'sd_mTLNV3ByYE3n7fCk'
      );
    }
  }

  async sd_ooMu5H8zQcCoxSbp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ooMu5H8zQcCoxSbp',
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
      bh = await this.sd_nyT13swTRIFdSWGW(bh, parentSpanInst);
      //appendnew_next_sd_ooMu5H8zQcCoxSbp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ooMu5H8zQcCoxSbp',
        spanInst,
        'sd_ooMu5H8zQcCoxSbp'
      );
    }
  }

  async sd_nyT13swTRIFdSWGW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nyT13swTRIFdSWGW',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tt5o5pFVCvAimhyj(bh, parentSpanInst);
      //appendnew_next_sd_nyT13swTRIFdSWGW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nyT13swTRIFdSWGW',
        spanInst,
        'sd_nyT13swTRIFdSWGW'
      );
    }
  }

  async sd_tt5o5pFVCvAimhyj(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tt5o5pFVCvAimhyj');
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
  //appendnew_flow_bin_Catch
}
