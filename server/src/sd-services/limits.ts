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
export class limits {
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
    this.serviceName = 'limits';
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
      instance = new limits(
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
    //appendnew_flow_limits_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: limits');
    //appendnew_flow_limits_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: limits');

    this.app['get'](
      `${this.serviceBasePath}/get-limit/:_id`,
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
          bh = await this.sd_AjyRzkUhRTsYlMni(bh, parentSpanInst);
          //appendnew_next_sd_QtlDMSU9lk5bsKem
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QtlDMSU9lk5bsKem');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-limits`,
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
          bh = await this.sd_j32e2wA0psjlXOql(bh, parentSpanInst);
          //appendnew_next_sd_Po6gqTfoWpS7kxAT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Po6gqTfoWpS7kxAT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_limits_HttpIn
  }
  //   service flows_limits

  //appendnew_flow_limits_start

  async sd_AjyRzkUhRTsYlMni(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AjyRzkUhRTsYlMni',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'limits',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FucKAIdIiJtK41G1(bh, parentSpanInst);
      //appendnew_next_sd_AjyRzkUhRTsYlMni
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AjyRzkUhRTsYlMni',
        spanInst,
        'sd_AjyRzkUhRTsYlMni'
      );
    }
  }

  async sd_FucKAIdIiJtK41G1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FucKAIdIiJtK41G1',
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
      bh = await this.sd_tzqVcUoag4QRpha8(bh, parentSpanInst);
      //appendnew_next_sd_FucKAIdIiJtK41G1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FucKAIdIiJtK41G1',
        spanInst,
        'sd_FucKAIdIiJtK41G1'
      );
    }
  }

  async sd_tzqVcUoag4QRpha8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tzqVcUoag4QRpha8',
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
        bh = await this.sd_4lwsCLYHA4Ictn4N(bh, parentSpanInst);
      } else {
        bh = await this.sd_7ae3iVdl9cZpzkWO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tzqVcUoag4QRpha8',
        spanInst,
        'sd_tzqVcUoag4QRpha8'
      );
    }
  }

  async sd_4lwsCLYHA4Ictn4N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4lwsCLYHA4Ictn4N',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      bh.filter = { _id: bh.input.params._id };
      bh.data;
      const data = bh.result.map((_data) => {
        return _data._id;
      });

      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i] == bh.filter._id) {
          console.log('finally !!!', bh.result[i]);
          bh.data = bh.result[i];
        }
      }

      console.log('i data ', bh.data);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_i8glpJhLEHGA7lnP(bh, parentSpanInst);
      //appendnew_next_sd_4lwsCLYHA4Ictn4N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4lwsCLYHA4Ictn4N',
        spanInst,
        'sd_4lwsCLYHA4Ictn4N'
      );
    }
  }

  async sd_i8glpJhLEHGA7lnP(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i8glpJhLEHGA7lnP');
    }
  }

  async sd_7ae3iVdl9cZpzkWO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ae3iVdl9cZpzkWO',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'No limit found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_i8glpJhLEHGA7lnP(bh, parentSpanInst);
      //appendnew_next_sd_7ae3iVdl9cZpzkWO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ae3iVdl9cZpzkWO',
        spanInst,
        'sd_7ae3iVdl9cZpzkWO'
      );
    }
  }

  async sd_j32e2wA0psjlXOql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j32e2wA0psjlXOql',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1ur1tDrEDacKnI4v(bh, parentSpanInst);
      //appendnew_next_sd_j32e2wA0psjlXOql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j32e2wA0psjlXOql',
        spanInst,
        'sd_j32e2wA0psjlXOql'
      );
    }
  }

  async sd_1ur1tDrEDacKnI4v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ur1tDrEDacKnI4v',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        'limits',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RvjevUy9wOStSQ3L(bh, parentSpanInst);
      //appendnew_next_sd_1ur1tDrEDacKnI4v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ur1tDrEDacKnI4v',
        spanInst,
        'sd_1ur1tDrEDacKnI4v'
      );
    }
  }

  async sd_RvjevUy9wOStSQ3L(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RvjevUy9wOStSQ3L');
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
  //appendnew_flow_limits_Catch
}
