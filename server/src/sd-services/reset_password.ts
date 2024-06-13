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
export class reset_password {
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
    this.serviceName = 'reset_password';
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
      instance = new reset_password(
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
    //appendnew_flow_reset_password_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: reset_password');
    //appendnew_flow_reset_password_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: reset_password');

    this.app['put'](
      `${this.serviceBasePath}/reset-password`,
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
          bh = await this.sd_kFZUqNBs4xIRZrxj(bh, parentSpanInst);
          //appendnew_next_sd_YsCdQDFg5IFZwoZn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YsCdQDFg5IFZwoZn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-password`,
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
          bh = await this.sd_G7sx7TAw9TzCzx6H(bh, parentSpanInst);
          //appendnew_next_sd_vL6vBbxD9B71zWOa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vL6vBbxD9B71zWOa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_reset_password_HttpIn
  }
  //   service flows_reset_password

  //appendnew_flow_reset_password_start

  async sd_kFZUqNBs4xIRZrxj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kFZUqNBs4xIRZrxj',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pfLFrrHIWoFVUwXf(bh, parentSpanInst);
      //appendnew_next_sd_kFZUqNBs4xIRZrxj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kFZUqNBs4xIRZrxj',
        spanInst,
        'sd_kFZUqNBs4xIRZrxj'
      );
    }
  }

  async sd_pfLFrrHIWoFVUwXf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pfLFrrHIWoFVUwXf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance: SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth =
        SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance.checkIfExist(
          spanInst,
          bh.searchObj
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qrNexXgx3HDHFFdH(bh, parentSpanInst);
      //appendnew_next_sd_pfLFrrHIWoFVUwXf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pfLFrrHIWoFVUwXf',
        spanInst,
        'sd_pfLFrrHIWoFVUwXf'
      );
    }
  }

  async sd_qrNexXgx3HDHFFdH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qrNexXgx3HDHFFdH',
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
        bh = await this.sd_Mzuc8dcrua2ZX4pf(bh, parentSpanInst);
      } else {
        bh = await this.sd_MyZhoKNk9mm7xuGi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qrNexXgx3HDHFFdH',
        spanInst,
        'sd_qrNexXgx3HDHFFdH'
      );
    }
  }

  async sd_Mzuc8dcrua2ZX4pf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mzuc8dcrua2ZX4pf',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.status = 200;
      bh.result = bh.result[0];
      bh.filter = { email: bh.input.body['email'] };
      bh.input.body = {
        ...bh.result,
      };
      const hashedPassword = await bcrypt.hash(bh.input.body.password, 10);
      bh.input.body.password = hashedPassword;
      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QKmfHf5v1iAoJIMR(bh, parentSpanInst);
      //appendnew_next_sd_Mzuc8dcrua2ZX4pf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mzuc8dcrua2ZX4pf',
        spanInst,
        'sd_Mzuc8dcrua2ZX4pf'
      );
    }
  }

  async sd_QKmfHf5v1iAoJIMR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QKmfHf5v1iAoJIMR',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        'users',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RPndJY79VYCClCbL(bh, parentSpanInst);
      //appendnew_next_sd_QKmfHf5v1iAoJIMR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QKmfHf5v1iAoJIMR',
        spanInst,
        'sd_QKmfHf5v1iAoJIMR'
      );
    }
  }

  async sd_RPndJY79VYCClCbL(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RPndJY79VYCClCbL');
    }
  }

  async sd_MyZhoKNk9mm7xuGi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MyZhoKNk9mm7xuGi',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RPndJY79VYCClCbL(bh, parentSpanInst);
      //appendnew_next_sd_MyZhoKNk9mm7xuGi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MyZhoKNk9mm7xuGi',
        spanInst,
        'sd_MyZhoKNk9mm7xuGi'
      );
    }
  }

  async sd_G7sx7TAw9TzCzx6H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G7sx7TAw9TzCzx6H',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rcjbcRsPlPwdY5i8(bh, parentSpanInst);
      //appendnew_next_sd_G7sx7TAw9TzCzx6H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G7sx7TAw9TzCzx6H',
        spanInst,
        'sd_G7sx7TAw9TzCzx6H'
      );
    }
  }

  async sd_rcjbcRsPlPwdY5i8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rcjbcRsPlPwdY5i8',
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
      bh = await this.sd_X6sOWLFetAV9JaeR(bh, parentSpanInst);
      //appendnew_next_sd_rcjbcRsPlPwdY5i8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rcjbcRsPlPwdY5i8',
        spanInst,
        'sd_rcjbcRsPlPwdY5i8'
      );
    }
  }

  async sd_X6sOWLFetAV9JaeR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X6sOWLFetAV9JaeR',
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
        bh = await this.sd_hiM9kGnCwe6HYTqo(bh, parentSpanInst);
      } else {
        bh = await this.sd_VziY0KEOApLt4hxn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X6sOWLFetAV9JaeR',
        spanInst,
        'sd_X6sOWLFetAV9JaeR'
      );
    }
  }

  async sd_hiM9kGnCwe6HYTqo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hiM9kGnCwe6HYTqo',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ieoDhzfYhWxoYugU(bh, parentSpanInst);
      //appendnew_next_sd_hiM9kGnCwe6HYTqo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hiM9kGnCwe6HYTqo',
        spanInst,
        'sd_hiM9kGnCwe6HYTqo'
      );
    }
  }

  async sd_ieoDhzfYhWxoYugU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ieoDhzfYhWxoYugU',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hxoyxAWXIjbx2FnC(bh, parentSpanInst);
      } else {
        bh = await this.sd_emBvfYO3O1DnDsME(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ieoDhzfYhWxoYugU',
        spanInst,
        'sd_ieoDhzfYhWxoYugU'
      );
    }
  }

  async sd_hxoyxAWXIjbx2FnC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hxoyxAWXIjbx2FnC',
      parentSpanInst
    );
    try {
      bh.status = 200;
      console.log('Match match');
      bh.result = {
        message: 'Matching',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7X0RR7epEfdwuDmo(bh, parentSpanInst);
      //appendnew_next_sd_hxoyxAWXIjbx2FnC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hxoyxAWXIjbx2FnC',
        spanInst,
        'sd_hxoyxAWXIjbx2FnC'
      );
    }
  }

  async sd_7X0RR7epEfdwuDmo(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7X0RR7epEfdwuDmo');
    }
  }

  async sd_emBvfYO3O1DnDsME(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_emBvfYO3O1DnDsME',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PASSWORD DON'T MATCH",
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_7X0RR7epEfdwuDmo(bh, parentSpanInst);
      //appendnew_next_sd_emBvfYO3O1DnDsME
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_emBvfYO3O1DnDsME',
        spanInst,
        'sd_emBvfYO3O1DnDsME'
      );
    }
  }

  async sd_VziY0KEOApLt4hxn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VziY0KEOApLt4hxn',
      parentSpanInst
    );
    try {
      console.log('Error Error');
      bh.status = 404;
      bh.result = {
        message: 'No user',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7X0RR7epEfdwuDmo(bh, parentSpanInst);
      //appendnew_next_sd_VziY0KEOApLt4hxn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VziY0KEOApLt4hxn',
        spanInst,
        'sd_VziY0KEOApLt4hxn'
      );
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
  //appendnew_flow_reset_password_Catch
}
