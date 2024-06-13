// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class auth {
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
    this.serviceName = 'auth';
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
      instance = new auth(
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
    //appendnew_flow_auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auth');
    //appendnew_flow_auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auth');

    this.app['post'](
      `${this.serviceBasePath}/register`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
      }),

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
          bh = await this.sd_kbZcqnQSg2r55SGk(bh, parentSpanInst);
          //appendnew_next_sd_wsqWGWcesvGtnqo1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wsqWGWcesvGtnqo1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update`,
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
          bh = await this.sd_IL3KQ2cnN00XR8n9(bh, parentSpanInst);
          //appendnew_next_sd_TcdKzKCe4pwlGvG4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TcdKzKCe4pwlGvG4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-file`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.sd_EMU76JKUwLutq0jK(bh, parentSpanInst);
          //appendnew_next_sd_xGYn1ynauI79omOt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xGYn1ynauI79omOt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-file`,
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
          bh = await this.sd_8OtQUxpu1OTSklDD(bh, parentSpanInst);
          //appendnew_next_sd_0dKFiCNy4qmxYTjl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0dKFiCNy4qmxYTjl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-admin`,
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
          bh = await this.sd_xF1aHbFU23VFIy91(bh, parentSpanInst);
          //appendnew_next_sd_kB85xAHf72lebzvN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kB85xAHf72lebzvN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-file/:filename`,
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
          bh = await this.sd_XuI5ang6rLg5end7(bh, parentSpanInst);
          //appendnew_next_sd_HUS6bPgtry4Z9I23
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HUS6bPgtry4Z9I23');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verification`,
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
          bh = await this.sd_cNdl8vgocns6VGYF(bh, parentSpanInst);
          //appendnew_next_sd_9Kx1Odisa7wjtoFP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9Kx1Odisa7wjtoFP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.sd_uq4lLunC71aFlNkj(bh, parentSpanInst);
          //appendnew_next_sd_hJdVW1jU3bQAeK05
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hJdVW1jU3bQAeK05');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/approve`,
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
          bh = await this.sd_wWhmgroqpanAcOha(bh, parentSpanInst);
          //appendnew_next_sd_6CyS8TPipEXGaJLU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6CyS8TPipEXGaJLU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/forgot-password`,
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
          bh = await this.sd_IA2OgDwcQNZbZXtM(bh, parentSpanInst);
          //appendnew_next_sd_j2nEOklY7b5SKH6B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j2nEOklY7b5SKH6B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-otp`,
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
          bh = await this.sd_mh91bhVNziPCCusO(bh, parentSpanInst);
          //appendnew_next_sd_gz6dq8FHPlal2Sfl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gz6dq8FHPlal2Sfl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-users`,
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
          bh = await this.sd_xcAfNpkho3zxE0fr(bh, parentSpanInst);
          //appendnew_next_sd_2AwmFR6x98aa2X6g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2AwmFR6x98aa2X6g');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_4VSJb3LCKqzWPHzs(bh, parentSpanInst);
          //appendnew_next_sd_oBsUxswjTcgMgsLh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oBsUxswjTcgMgsLh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-user/:email`,
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
          bh = await this.sd_hmdg8ysNupoWdOn6(bh, parentSpanInst);
          //appendnew_next_sd_CLgLydBqNVti2WhZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CLgLydBqNVti2WhZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/decline`,
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
          bh = await this.sd_FpxzBN54euX5DNEa(bh, parentSpanInst);
          //appendnew_next_sd_i2BDjs7lWIqTOk84
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_i2BDjs7lWIqTOk84');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-limits`,
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
          bh = await this.sd_GgM7zUZye6XPGEA4(bh, parentSpanInst);
          //appendnew_next_sd_nRZpLBbte1ru4uxr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nRZpLBbte1ru4uxr');
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
          bh = await this.sd_3yx5lMlq794tyhIu(bh, parentSpanInst);
          //appendnew_next_sd_j82TdnOuu507rjLr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j82TdnOuu507rjLr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-limits`,
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
          bh = await this.sd_d72ESEeBH1cYuKnQ(bh, parentSpanInst);
          //appendnew_next_sd_jC4CZPcrB6AM8APi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jC4CZPcrB6AM8APi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/test`,
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
          bh = await this.sd_tUDN48AN90NHUTKL(bh, parentSpanInst);
          //appendnew_next_sd_Q3EoU5e5mTgntbFC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Q3EoU5e5mTgntbFC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login-pin`,
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
          bh = await this.sd_SRcEjTK7ZizqL04P(bh, parentSpanInst);
          //appendnew_next_sd_B6IXDQBMiBUQwk0z
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_B6IXDQBMiBUQwk0z');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auth_HttpIn
  }
  //   service flows_auth

  async checkIfExist(parentSpanInst, searchObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'checkIfExist',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_o8c0l4D11uvNKdIC(bh, parentSpanInst);
      //appendnew_next_checkIfExist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ygLudNMItp9Xqotm',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_auth_start

  async sd_kbZcqnQSg2r55SGk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kbZcqnQSg2r55SGk',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      // This is the fix, when adding documents to the DB
      // Add your own _id as a type of 'number'
      // The issue is that the _id that MongoDB provides is an Object SO we couldn't find it
      bh.input.body['_id'] = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U1NLypdAJKVQskul(bh, parentSpanInst);
      //appendnew_next_sd_kbZcqnQSg2r55SGk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kbZcqnQSg2r55SGk',
        spanInst,
        'sd_kbZcqnQSg2r55SGk'
      );
    }
  }

  async sd_U1NLypdAJKVQskul(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U1NLypdAJKVQskul',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B82AggI2BXaoFCwk(bh, parentSpanInst);
      //appendnew_next_sd_U1NLypdAJKVQskul
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U1NLypdAJKVQskul',
        spanInst,
        'sd_U1NLypdAJKVQskul'
      );
    }
  }

  async sd_B82AggI2BXaoFCwk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B82AggI2BXaoFCwk',
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
        bh = await this.ifError(bh, parentSpanInst);
      } else {
        bh = await this.ifSuccess(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B82AggI2BXaoFCwk',
        spanInst,
        'sd_B82AggI2BXaoFCwk'
      );
    }
  }

  async ifError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifError', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = {
        message: 'User already exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TVW1YChwcueLIbBM(bh, parentSpanInst);
      //appendnew_next_ifError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8byiLnVAIJwBOtbq',
        spanInst,
        'ifError'
      );
    }
  }

  async sd_TVW1YChwcueLIbBM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TVW1YChwcueLIbBM');
    }
  }

  async ifSuccess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifSuccess', parentSpanInst);
    try {
      bh.status = 200;
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      bh.body = bh.input.body;
      bh.input.body['status'] = 'Pending';
      bh.input.body['OTP'] = '';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tWvi321XyzGdzHq1(bh, parentSpanInst);
      bh = await this.sd_bphegCm8mwdh0GWH(bh, parentSpanInst);
      //appendnew_next_ifSuccess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6PE1R3GN0PWCtVVj',
        spanInst,
        'ifSuccess'
      );
    }
  }

  async sd_tWvi321XyzGdzHq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tWvi321XyzGdzHq1',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendEmail(bh, parentSpanInst);
      //appendnew_next_sd_tWvi321XyzGdzHq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tWvi321XyzGdzHq1',
        spanInst,
        'sd_tWvi321XyzGdzHq1'
      );
    }
  }

  async sendEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    try {
      bh.status = 200;
      bh.payload = {
        to: bh.input.body.email,
        subject: 'FNB ACCOUNT',
        from: 'FNB',
        ptag: `<p>Your Account has been created successfully</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3H8LefEtmRLAuSHY(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IqRDFPTyLhPvUIrA',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sd_3H8LefEtmRLAuSHY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3H8LefEtmRLAuSHY',
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
          body: bh.payload.body,
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
      await this.sd_TVW1YChwcueLIbBM(bh, parentSpanInst);
      //appendnew_next_sd_3H8LefEtmRLAuSHY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3H8LefEtmRLAuSHY',
        spanInst,
        'sd_3H8LefEtmRLAuSHY'
      );
    }
  }

  async sd_bphegCm8mwdh0GWH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bphegCm8mwdh0GWH',
      parentSpanInst
    );
    try {
      bh.collection = 'notifications';
      bh.body = {
        _id: new Date().getTime(),
        title: 'Easy PAYU Application',
        message: `You have a new application from ${bh.input.body.email}`,
        read: false,
        createdDate: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getUTCFullYear()}`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yu22SywR55qziFjZ(bh, parentSpanInst);
      //appendnew_next_sd_bphegCm8mwdh0GWH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bphegCm8mwdh0GWH',
        spanInst,
        'sd_bphegCm8mwdh0GWH'
      );
    }
  }

  async sd_yu22SywR55qziFjZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yu22SywR55qziFjZ',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TVW1YChwcueLIbBM(bh, parentSpanInst);
      //appendnew_next_sd_yu22SywR55qziFjZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yu22SywR55qziFjZ',
        spanInst,
        'sd_yu22SywR55qziFjZ'
      );
    }
  }

  async sd_o8c0l4D11uvNKdIC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o8c0l4D11uvNKdIC',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_o8c0l4D11uvNKdIC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o8c0l4D11uvNKdIC',
        spanInst,
        'sd_o8c0l4D11uvNKdIC'
      );
    }
  }

  async sd_IL3KQ2cnN00XR8n9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IL3KQ2cnN00XR8n9',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;
      // delete bh.input.body['_id']; // Need to remove _id if you update

      bh.body = { $set: bh.input.body };

      console.log('Body data', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_svfviycgAG6f0RrV(bh, parentSpanInst);
      //appendnew_next_sd_IL3KQ2cnN00XR8n9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IL3KQ2cnN00XR8n9',
        spanInst,
        'sd_IL3KQ2cnN00XR8n9'
      );
    }
  }

  async sd_svfviycgAG6f0RrV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_svfviycgAG6f0RrV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dD5nqIqhtJxOErYt(bh, parentSpanInst);
      //appendnew_next_sd_svfviycgAG6f0RrV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_svfviycgAG6f0RrV',
        spanInst,
        'sd_svfviycgAG6f0RrV'
      );
    }
  }

  async sd_dD5nqIqhtJxOErYt(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dD5nqIqhtJxOErYt');
    }
  }

  async sd_EMU76JKUwLutq0jK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EMU76JKUwLutq0jK',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.file[0];
      // bh.file['ID'] = new Date().getTime();
      console.log("Let's see what the file holds", bh.file);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BHduQ5xAyOncXmta(bh, parentSpanInst);
      //appendnew_next_sd_EMU76JKUwLutq0jK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EMU76JKUwLutq0jK',
        spanInst,
        'sd_EMU76JKUwLutq0jK'
      );
    }
  }

  async sd_BHduQ5xAyOncXmta(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BHduQ5xAyOncXmta',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_ajFrSs3mQRYSN97Z',
        'files',
        bh.file.path,
        bh.file.filename,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PuSdM1tW1KeFaXdG(bh, parentSpanInst);
      //appendnew_next_sd_BHduQ5xAyOncXmta
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BHduQ5xAyOncXmta',
        spanInst,
        'sd_BHduQ5xAyOncXmta'
      );
    }
  }

  async sd_PuSdM1tW1KeFaXdG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PuSdM1tW1KeFaXdG',
      parentSpanInst
    );
    try {
      console.log('Data da ssss', bh.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BkTEbjv46m5Enup2(bh, parentSpanInst);
      //appendnew_next_sd_PuSdM1tW1KeFaXdG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PuSdM1tW1KeFaXdG',
        spanInst,
        'sd_PuSdM1tW1KeFaXdG'
      );
    }
  }

  async sd_BkTEbjv46m5Enup2(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BkTEbjv46m5Enup2');
    }
  }

  async sd_8OtQUxpu1OTSklDD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8OtQUxpu1OTSklDD',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'files.files',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e1Ymjrhgyrpk8hRF(bh, parentSpanInst);
      //appendnew_next_sd_8OtQUxpu1OTSklDD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8OtQUxpu1OTSklDD',
        spanInst,
        'sd_8OtQUxpu1OTSklDD'
      );
    }
  }

  async sd_e1Ymjrhgyrpk8hRF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e1Ymjrhgyrpk8hRF',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W9w3XGf65Eze3qAj(bh, parentSpanInst);
      //appendnew_next_sd_e1Ymjrhgyrpk8hRF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e1Ymjrhgyrpk8hRF',
        spanInst,
        'sd_e1Ymjrhgyrpk8hRF'
      );
    }
  }

  async sd_W9w3XGf65Eze3qAj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W9w3XGf65Eze3qAj',
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
        bh = await this.sd_vBAwvG2qumjZdQ5W(bh, parentSpanInst);
      } else {
        bh = await this.sd_XTWlScMZ55pmxoDw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W9w3XGf65Eze3qAj',
        spanInst,
        'sd_W9w3XGf65Eze3qAj'
      );
    }
  }

  async sd_vBAwvG2qumjZdQ5W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vBAwvG2qumjZdQ5W',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KTvbicfFqK0dgmQg(bh, parentSpanInst);
      //appendnew_next_sd_vBAwvG2qumjZdQ5W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vBAwvG2qumjZdQ5W',
        spanInst,
        'sd_vBAwvG2qumjZdQ5W'
      );
    }
  }

  async sd_KTvbicfFqK0dgmQg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KTvbicfFqK0dgmQg');
    }
  }

  async sd_XTWlScMZ55pmxoDw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XTWlScMZ55pmxoDw',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KTvbicfFqK0dgmQg(bh, parentSpanInst);
      //appendnew_next_sd_XTWlScMZ55pmxoDw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XTWlScMZ55pmxoDw',
        spanInst,
        'sd_XTWlScMZ55pmxoDw'
      );
    }
  }

  async sd_xF1aHbFU23VFIy91(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xF1aHbFU23VFIy91',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.input.body['_id'] = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_thV4LW24bpgzXF0x(bh, parentSpanInst);
      //appendnew_next_sd_xF1aHbFU23VFIy91
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xF1aHbFU23VFIy91',
        spanInst,
        'sd_xF1aHbFU23VFIy91'
      );
    }
  }

  async sd_thV4LW24bpgzXF0x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_thV4LW24bpgzXF0x',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gvbiF9TsaJic257A(bh, parentSpanInst);
      //appendnew_next_sd_thV4LW24bpgzXF0x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_thV4LW24bpgzXF0x',
        spanInst,
        'sd_thV4LW24bpgzXF0x'
      );
    }
  }

  async sd_gvbiF9TsaJic257A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gvbiF9TsaJic257A',
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
        bh = await this.ifFound(bh, parentSpanInst);
      } else {
        bh = await this.ifSucceess(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gvbiF9TsaJic257A',
        spanInst,
        'sd_gvbiF9TsaJic257A'
      );
    }
  }

  async ifFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifFound', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = {
        message: 'Admin Already Exist!!!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6LZxfceffqnduax(bh, parentSpanInst);
      //appendnew_next_ifFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B7rcag9FpwRL81nB',
        spanInst,
        'ifFound'
      );
    }
  }

  async sd_c6LZxfceffqnduax(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c6LZxfceffqnduax');
    }
  }

  async ifSucceess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ifSucceess',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.status = 200;
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      const hashedPassword = await bcrypt.hash(bh.input.body['password'], 10);
      console.log('bcrypt hashed pass', hashedPassword);
      bh.input.body['password'] = hashedPassword;
      bh.body = bh.input.body;

      console.log('Body', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T3v962reCoKtkUSG(bh, parentSpanInst);
      //appendnew_next_ifSucceess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ddGSppBxeVEjXnUu',
        spanInst,
        'ifSucceess'
      );
    }
  }

  async sd_T3v962reCoKtkUSG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T3v962reCoKtkUSG',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6LZxfceffqnduax(bh, parentSpanInst);
      //appendnew_next_sd_T3v962reCoKtkUSG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T3v962reCoKtkUSG',
        spanInst,
        'sd_T3v962reCoKtkUSG'
      );
    }
  }

  async sd_XuI5ang6rLg5end7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XuI5ang6rLg5end7',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'files.files',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oqDjnw4MPRLCxxh8(bh, parentSpanInst);
      //appendnew_next_sd_XuI5ang6rLg5end7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XuI5ang6rLg5end7',
        spanInst,
        'sd_XuI5ang6rLg5end7'
      );
    }
  }

  async sd_oqDjnw4MPRLCxxh8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oqDjnw4MPRLCxxh8',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5nHU1K4fODmmzdmE(bh, parentSpanInst);
      //appendnew_next_sd_oqDjnw4MPRLCxxh8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oqDjnw4MPRLCxxh8',
        spanInst,
        'sd_oqDjnw4MPRLCxxh8'
      );
    }
  }

  async sd_5nHU1K4fODmmzdmE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5nHU1K4fODmmzdmE',
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
        bh = await this.sd_N43Evb5ywqf9HLqZ(bh, parentSpanInst);
      } else {
        bh = await this.sd_zB6RCba7lqBpwZY5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5nHU1K4fODmmzdmE',
        spanInst,
        'sd_5nHU1K4fODmmzdmE'
      );
    }
  }

  async sd_N43Evb5ywqf9HLqZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N43Evb5ywqf9HLqZ',
      parentSpanInst
    );
    try {
      bh.result = bh.result;

      const data = bh.result.map((_data) => {
        return _data.filename;
      });

      data.forEach((item) => {
        bh.filter = { filename: item };
      });

      console.log(1111, bh.filter);

      // for(let i = 0;i<=data.length - 1;i++)
      // {
      //     if(data[i] == bh.filter.filename)
      //     {
      //         bh.data = bh.result[i];
      //         this.getDoc(bh.data)
      //     }
      // }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6lGEPgVdLggcxVNd(bh, parentSpanInst);
      //appendnew_next_sd_N43Evb5ywqf9HLqZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N43Evb5ywqf9HLqZ',
        spanInst,
        'sd_N43Evb5ywqf9HLqZ'
      );
    }
  }

  async sd_6lGEPgVdLggcxVNd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6lGEPgVdLggcxVNd',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_ajFrSs3mQRYSN97Z',
        'files',
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pXcwiQfXrNd01xyk(bh, parentSpanInst);
      //appendnew_next_sd_6lGEPgVdLggcxVNd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6lGEPgVdLggcxVNd',
        spanInst,
        'sd_6lGEPgVdLggcxVNd'
      );
    }
  }

  async sd_pXcwiQfXrNd01xyk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pXcwiQfXrNd01xyk',
      parentSpanInst
    );
    try {
      bh.file = bh.result;
      console.log('Filedata', bh.file.metadata);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eYpGZ5fRcnMTKcLL(bh, parentSpanInst);
      //appendnew_next_sd_pXcwiQfXrNd01xyk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pXcwiQfXrNd01xyk',
        spanInst,
        'sd_pXcwiQfXrNd01xyk'
      );
    }
  }

  async sd_eYpGZ5fRcnMTKcLL(bh, parentSpanInst) {
    try {
      bh.file.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eYpGZ5fRcnMTKcLL');
    }
  }

  async sd_zB6RCba7lqBpwZY5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zB6RCba7lqBpwZY5',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Files not Found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_eYpGZ5fRcnMTKcLL(bh, parentSpanInst);
      //appendnew_next_sd_zB6RCba7lqBpwZY5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zB6RCba7lqBpwZY5',
        spanInst,
        'sd_zB6RCba7lqBpwZY5'
      );
    }
  }

  async sd_cNdl8vgocns6VGYF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cNdl8vgocns6VGYF',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bI1YIRnJGh4Fglcx(bh, parentSpanInst);
      //appendnew_next_sd_cNdl8vgocns6VGYF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cNdl8vgocns6VGYF',
        spanInst,
        'sd_cNdl8vgocns6VGYF'
      );
    }
  }

  async sd_bI1YIRnJGh4Fglcx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bI1YIRnJGh4Fglcx',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WmdNO4n9TGzzjxTz(bh, parentSpanInst);
      //appendnew_next_sd_bI1YIRnJGh4Fglcx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bI1YIRnJGh4Fglcx',
        spanInst,
        'sd_bI1YIRnJGh4Fglcx'
      );
    }
  }

  async sd_WmdNO4n9TGzzjxTz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WmdNO4n9TGzzjxTz',
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
        bh = await this.sd_Xx9OmbQs6pyAGNcH(bh, parentSpanInst);
      } else {
        bh = await this.sd_bO3r8GbizlfNytl2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WmdNO4n9TGzzjxTz',
        spanInst,
        'sd_WmdNO4n9TGzzjxTz'
      );
    }
  }

  async sd_Xx9OmbQs6pyAGNcH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xx9OmbQs6pyAGNcH',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.resutl = bh.result[0];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst);
      //appendnew_next_sd_Xx9OmbQs6pyAGNcH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xx9OmbQs6pyAGNcH',
        spanInst,
        'sd_Xx9OmbQs6pyAGNcH'
      );
    }
  }

  async sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t1e1KrE9R6WnqI7A');
    }
  }

  async sd_bO3r8GbizlfNytl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bO3r8GbizlfNytl2',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        message: 'User not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst);
      //appendnew_next_sd_bO3r8GbizlfNytl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bO3r8GbizlfNytl2',
        spanInst,
        'sd_bO3r8GbizlfNytl2'
      );
    }
  }

  async sd_uq4lLunC71aFlNkj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uq4lLunC71aFlNkj',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };
      delete bh.input.body.collection;
      console.log('Deleted collection', delete bh.input.body.collection);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1ts6hALc1iwxyBRz(bh, parentSpanInst);
      //appendnew_next_sd_uq4lLunC71aFlNkj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uq4lLunC71aFlNkj',
        spanInst,
        'sd_uq4lLunC71aFlNkj'
      );
    }
  }

  async sd_1ts6hALc1iwxyBRz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ts6hALc1iwxyBRz',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EMPlfSvHonePZJWc(bh, parentSpanInst);
      //appendnew_next_sd_1ts6hALc1iwxyBRz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ts6hALc1iwxyBRz',
        spanInst,
        'sd_1ts6hALc1iwxyBRz'
      );
    }
  }

  async sd_EMPlfSvHonePZJWc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EMPlfSvHonePZJWc');
    }
  }

  async sd_wWhmgroqpanAcOha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wWhmgroqpanAcOha',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'FNB ACCOUNT',
        from: 'FNB',
        ptag: `<p>Your Application Has been Approved</p>
    <h3>Please Login using</h3>
    <p>Account No: ${bh.input.body._id}</p>
    <p>Username: ${bh.input.body.email}</p>
    <p>Password: ${bh.input.body.password}</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bJy17l51susoCvR6(bh, parentSpanInst);
      //appendnew_next_sd_wWhmgroqpanAcOha
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wWhmgroqpanAcOha',
        spanInst,
        'sd_wWhmgroqpanAcOha'
      );
    }
  }

  async sd_bJy17l51susoCvR6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bJy17l51susoCvR6',
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
      bh = await this.sd_lZSWfxDNEl6yCKxM(bh, parentSpanInst);
      //appendnew_next_sd_bJy17l51susoCvR6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bJy17l51susoCvR6',
        spanInst,
        'sd_bJy17l51susoCvR6'
      );
    }
  }

  async sd_lZSWfxDNEl6yCKxM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lZSWfxDNEl6yCKxM',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.body['email'] };
      const bcrypt = require('bcrypt');
      const hashedPassword = await bcrypt.hash(bh.input.body['password'], 10);
      bh.input.body['password'] = hashedPassword;
      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_svRXiAApQWbrqqla(bh, parentSpanInst);
      //appendnew_next_sd_lZSWfxDNEl6yCKxM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lZSWfxDNEl6yCKxM',
        spanInst,
        'sd_lZSWfxDNEl6yCKxM'
      );
    }
  }

  async sd_svRXiAApQWbrqqla(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_svRXiAApQWbrqqla',
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
      await this.sd_acRYmMlvavd7AcXM(bh, parentSpanInst);
      //appendnew_next_sd_svRXiAApQWbrqqla
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_svRXiAApQWbrqqla',
        spanInst,
        'sd_svRXiAApQWbrqqla'
      );
    }
  }

  async sd_acRYmMlvavd7AcXM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_acRYmMlvavd7AcXM');
    }
  }

  async sd_IA2OgDwcQNZbZXtM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IA2OgDwcQNZbZXtM',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.newPassword = bh.input.body.newPassword;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6K3nYNyyKU1CFWBP(bh, parentSpanInst);
      //appendnew_next_sd_IA2OgDwcQNZbZXtM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IA2OgDwcQNZbZXtM',
        spanInst,
        'sd_IA2OgDwcQNZbZXtM'
      );
    }
  }

  async sd_6K3nYNyyKU1CFWBP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6K3nYNyyKU1CFWBP',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.searchObj);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2lp13NsjXECaI0of(bh, parentSpanInst);
      //appendnew_next_sd_6K3nYNyyKU1CFWBP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6K3nYNyyKU1CFWBP',
        spanInst,
        'sd_6K3nYNyyKU1CFWBP'
      );
    }
  }

  async sd_2lp13NsjXECaI0of(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2lp13NsjXECaI0of',
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
        bh = await this.sendOtp(bh, parentSpanInst);
      } else {
        bh = await this.sd_jcLO4gylDGM9MCBM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2lp13NsjXECaI0of',
        spanInst,
        'sd_2lp13NsjXECaI0of'
      );
    }
  }

  async sendOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendOtp', parentSpanInst);
    try {
      bh.otp = bh.input.body.otp;
      bh.filter = { email: bh.input.body['email'] };
      bh.input.body = {
        ...bh.result[0],
      };

      bh.input.body.OTP = bh.otp;
      bh.body = { $set: bh.input.body };

      bh.payload = {
        to: bh.input.body.email,
        subject: 'Forgot Password',
        from: 'FNB',
        ptag: `<p>Your OTP is ${bh.input.body.OTP}</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q3iVDqsSlXn9rilD(bh, parentSpanInst);
      //appendnew_next_sendOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VCqUyHSKEg02JT3J',
        spanInst,
        'sendOtp'
      );
    }
  }

  async sd_Q3iVDqsSlXn9rilD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q3iVDqsSlXn9rilD',
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
      bh.results = await emailServiceInstance.sendEmail(
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
          body: bh.payload.body,
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
      bh = await this.sd_CsqlVcyusuyUG0DL(bh, parentSpanInst);
      //appendnew_next_sd_Q3iVDqsSlXn9rilD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q3iVDqsSlXn9rilD',
        spanInst,
        'sd_Q3iVDqsSlXn9rilD'
      );
    }
  }

  async sd_CsqlVcyusuyUG0DL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CsqlVcyusuyUG0DL',
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
      await this.sd_bJysZ30bupy8asBc(bh, parentSpanInst);
      //appendnew_next_sd_CsqlVcyusuyUG0DL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CsqlVcyusuyUG0DL',
        spanInst,
        'sd_CsqlVcyusuyUG0DL'
      );
    }
  }

  async sd_bJysZ30bupy8asBc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJysZ30bupy8asBc');
    }
  }

  async sd_jcLO4gylDGM9MCBM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jcLO4gylDGM9MCBM',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };

      console.log('user dnt exist');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bJysZ30bupy8asBc(bh, parentSpanInst);
      //appendnew_next_sd_jcLO4gylDGM9MCBM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jcLO4gylDGM9MCBM',
        spanInst,
        'sd_jcLO4gylDGM9MCBM'
      );
    }
  }

  async sd_mh91bhVNziPCCusO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mh91bhVNziPCCusO',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.newPassword = bh.input.body.newPassword;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3OZmy2peMJivw44w(bh, parentSpanInst);
      //appendnew_next_sd_mh91bhVNziPCCusO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mh91bhVNziPCCusO',
        spanInst,
        'sd_mh91bhVNziPCCusO'
      );
    }
  }

  async sd_3OZmy2peMJivw44w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3OZmy2peMJivw44w',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.searchObj);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OvuB5fnGljhZQPuV(bh, parentSpanInst);
      //appendnew_next_sd_3OZmy2peMJivw44w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3OZmy2peMJivw44w',
        spanInst,
        'sd_3OZmy2peMJivw44w'
      );
    }
  }

  async sd_OvuB5fnGljhZQPuV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OvuB5fnGljhZQPuV',
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
        bh = await this.verifyOtp(bh, parentSpanInst);
      } else {
        bh = await this.sd_XKNseNpxyuKrmvFk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OvuB5fnGljhZQPuV',
        spanInst,
        'sd_OvuB5fnGljhZQPuV'
      );
    }
  }

  async verifyOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('verifyOtp', parentSpanInst);
    try {
      if (bh.result[0].OTP === bh.input.body.otp) {
        bh.isCorrectOtp = true;
      } else {
        bh.isCorrectOtp = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QoNkAjuCGfaNYXDh(bh, parentSpanInst);
      //appendnew_next_verifyOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vuCpnEfeDErUk41b',
        spanInst,
        'verifyOtp'
      );
    }
  }

  async sd_QoNkAjuCGfaNYXDh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QoNkAjuCGfaNYXDh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.isCorrectOtp,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_09u3nrSak6acL8NK(bh, parentSpanInst);
      } else {
        bh = await this.sd_a9iRk9LLwUR7SVIi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QoNkAjuCGfaNYXDh',
        spanInst,
        'sd_QoNkAjuCGfaNYXDh'
      );
    }
  }

  async sd_09u3nrSak6acL8NK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_09u3nrSak6acL8NK',
      parentSpanInst
    );
    try {
      bh.result = {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_09u3nrSak6acL8NK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_09u3nrSak6acL8NK',
        spanInst,
        'sd_09u3nrSak6acL8NK'
      );
    }
  }

  async sd_lK8sdqY5op4XM98w(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lK8sdqY5op4XM98w');
    }
  }

  async sd_a9iRk9LLwUR7SVIi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a9iRk9LLwUR7SVIi',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'OTP not match',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_a9iRk9LLwUR7SVIi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a9iRk9LLwUR7SVIi',
        spanInst,
        'sd_a9iRk9LLwUR7SVIi'
      );
    }
  }

  async sd_XKNseNpxyuKrmvFk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XKNseNpxyuKrmvFk',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_XKNseNpxyuKrmvFk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XKNseNpxyuKrmvFk',
        spanInst,
        'sd_XKNseNpxyuKrmvFk'
      );
    }
  }

  async sd_xcAfNpkho3zxE0fr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xcAfNpkho3zxE0fr',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hxDacUzGo640XwXu(bh, parentSpanInst);
      //appendnew_next_sd_xcAfNpkho3zxE0fr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xcAfNpkho3zxE0fr',
        spanInst,
        'sd_xcAfNpkho3zxE0fr'
      );
    }
  }

  async sd_hxDacUzGo640XwXu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hxDacUzGo640XwXu',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WxDaZehPH5cGjHMI(bh, parentSpanInst);
      //appendnew_next_sd_hxDacUzGo640XwXu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hxDacUzGo640XwXu',
        spanInst,
        'sd_hxDacUzGo640XwXu'
      );
    }
  }

  async sd_WxDaZehPH5cGjHMI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WxDaZehPH5cGjHMI',
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
        bh = await this.sd_WWVKD7LbhtIxKgql(bh, parentSpanInst);
      } else {
        bh = await this.sd_WFsB4vp8wP0Uc0jf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WxDaZehPH5cGjHMI',
        spanInst,
        'sd_WxDaZehPH5cGjHMI'
      );
    }
  }

  async sd_WWVKD7LbhtIxKgql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WWVKD7LbhtIxKgql',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AfeVe46h74IT3M4P(bh, parentSpanInst);
      //appendnew_next_sd_WWVKD7LbhtIxKgql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WWVKD7LbhtIxKgql',
        spanInst,
        'sd_WWVKD7LbhtIxKgql'
      );
    }
  }

  async sd_AfeVe46h74IT3M4P(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AfeVe46h74IT3M4P');
    }
  }

  async sd_WFsB4vp8wP0Uc0jf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WFsB4vp8wP0Uc0jf',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AfeVe46h74IT3M4P(bh, parentSpanInst);
      //appendnew_next_sd_WFsB4vp8wP0Uc0jf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WFsB4vp8wP0Uc0jf',
        spanInst,
        'sd_WFsB4vp8wP0Uc0jf'
      );
    }
  }

  async sd_4VSJb3LCKqzWPHzs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4VSJb3LCKqzWPHzs',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      console.log('bh.input.params', bh.input.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MBNgweWW8QJ3gy96(bh, parentSpanInst);
      //appendnew_next_sd_4VSJb3LCKqzWPHzs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4VSJb3LCKqzWPHzs',
        spanInst,
        'sd_4VSJb3LCKqzWPHzs'
      );
    }
  }

  async sd_MBNgweWW8QJ3gy96(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MBNgweWW8QJ3gy96',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OB6tUkmwnYkYgBt8(bh, parentSpanInst);
      //appendnew_next_sd_MBNgweWW8QJ3gy96
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MBNgweWW8QJ3gy96',
        spanInst,
        'sd_MBNgweWW8QJ3gy96'
      );
    }
  }

  async sd_OB6tUkmwnYkYgBt8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OB6tUkmwnYkYgBt8',
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
        bh = await this.sd_FllQj01ptdt9LAnU(bh, parentSpanInst);
      } else {
        bh = await this.sd_Gznm98dxQtDk93Lf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OB6tUkmwnYkYgBt8',
        spanInst,
        'sd_OB6tUkmwnYkYgBt8'
      );
    }
  }

  async sd_FllQj01ptdt9LAnU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FllQj01ptdt9LAnU',
      parentSpanInst
    );
    try {
      bh.result = bh.result[0];
      bh.verifiedUser = false;
      if (bh.result.password) {
        bh.verifiedUser = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fh1c3d0gDPUWltTx(bh, parentSpanInst);
      //appendnew_next_sd_FllQj01ptdt9LAnU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FllQj01ptdt9LAnU',
        spanInst,
        'sd_FllQj01ptdt9LAnU'
      );
    }
  }

  async sd_Fh1c3d0gDPUWltTx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fh1c3d0gDPUWltTx',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.verifiedUser,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Ehii9baB9fyHFBt8(bh, parentSpanInst);
      } else {
        bh = await this.sd_TmekbtScVdYg24Cr(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fh1c3d0gDPUWltTx',
        spanInst,
        'sd_Fh1c3d0gDPUWltTx'
      );
    }
  }

  async sd_Ehii9baB9fyHFBt8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ehii9baB9fyHFBt8',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TOURp9qKIevsDjjf(bh, parentSpanInst);
      //appendnew_next_sd_Ehii9baB9fyHFBt8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ehii9baB9fyHFBt8',
        spanInst,
        'sd_Ehii9baB9fyHFBt8'
      );
    }
  }

  async sd_TOURp9qKIevsDjjf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TOURp9qKIevsDjjf',
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
        bh = await this.sd_QxCZmhDNfRBIwHKA(bh, parentSpanInst);
      } else {
        bh = await this.sd_0qZG0chn6JnJPErO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TOURp9qKIevsDjjf',
        spanInst,
        'sd_TOURp9qKIevsDjjf'
      );
    }
  }

  async sd_QxCZmhDNfRBIwHKA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QxCZmhDNfRBIwHKA',
      parentSpanInst
    );
    try {
      bh.status = 200;
      console.log('Match match');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_olfV7ccYpH7LQ2CJ(bh, parentSpanInst);
      //appendnew_next_sd_QxCZmhDNfRBIwHKA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QxCZmhDNfRBIwHKA',
        spanInst,
        'sd_QxCZmhDNfRBIwHKA'
      );
    }
  }

  async sd_olfV7ccYpH7LQ2CJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_olfV7ccYpH7LQ2CJ');
    }
  }

  async sd_0qZG0chn6JnJPErO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0qZG0chn6JnJPErO',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        message: "PASSWORD DON'T MATCH",
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_olfV7ccYpH7LQ2CJ(bh, parentSpanInst);
      //appendnew_next_sd_0qZG0chn6JnJPErO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0qZG0chn6JnJPErO',
        spanInst,
        'sd_0qZG0chn6JnJPErO'
      );
    }
  }

  async sd_TmekbtScVdYg24Cr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TmekbtScVdYg24Cr',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        isNotApprovedAcc: 'Account application not approved yet',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_olfV7ccYpH7LQ2CJ(bh, parentSpanInst);
      //appendnew_next_sd_TmekbtScVdYg24Cr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TmekbtScVdYg24Cr',
        spanInst,
        'sd_TmekbtScVdYg24Cr'
      );
    }
  }

  async sd_Gznm98dxQtDk93Lf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gznm98dxQtDk93Lf',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        message: "User don't exist",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_olfV7ccYpH7LQ2CJ(bh, parentSpanInst);
      //appendnew_next_sd_Gznm98dxQtDk93Lf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gznm98dxQtDk93Lf',
        spanInst,
        'sd_Gznm98dxQtDk93Lf'
      );
    }
  }

  async sd_hmdg8ysNupoWdOn6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hmdg8ysNupoWdOn6',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qIRM1NBRVtCMOzxb(bh, parentSpanInst);
      //appendnew_next_sd_hmdg8ysNupoWdOn6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hmdg8ysNupoWdOn6',
        spanInst,
        'sd_hmdg8ysNupoWdOn6'
      );
    }
  }

  async sd_qIRM1NBRVtCMOzxb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qIRM1NBRVtCMOzxb',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_q88qf9HjiiFfihWk(bh, parentSpanInst);
      //appendnew_next_sd_qIRM1NBRVtCMOzxb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qIRM1NBRVtCMOzxb',
        spanInst,
        'sd_qIRM1NBRVtCMOzxb'
      );
    }
  }

  async sd_q88qf9HjiiFfihWk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q88qf9HjiiFfihWk',
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
        bh = await this.sd_wx3rRh0j3UyjBRr6(bh, parentSpanInst);
      } else {
        bh = await this.sd_flap8lqbwK2nb2PP(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q88qf9HjiiFfihWk',
        spanInst,
        'sd_q88qf9HjiiFfihWk'
      );
    }
  }

  async sd_wx3rRh0j3UyjBRr6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wx3rRh0j3UyjBRr6',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      bh.filter = { email: bh.input.params.email };
      bh.data;
      const data = bh.result.map((_data) => {
        return _data.email;
      });

      for (let i = 0; i <= data.length - 1; i++) {
        if (data[i] == bh.filter.email) {
          console.log('finally !!!', bh.result[i]);
          bh.data = bh.result[i];
        }
      }

      console.log('i data ', bh.data);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IJdip9jR3HpGmWbe(bh, parentSpanInst);
      //appendnew_next_sd_wx3rRh0j3UyjBRr6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wx3rRh0j3UyjBRr6',
        spanInst,
        'sd_wx3rRh0j3UyjBRr6'
      );
    }
  }

  async sd_IJdip9jR3HpGmWbe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IJdip9jR3HpGmWbe');
    }
  }

  async sd_flap8lqbwK2nb2PP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_flap8lqbwK2nb2PP',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User not Found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IJdip9jR3HpGmWbe(bh, parentSpanInst);
      //appendnew_next_sd_flap8lqbwK2nb2PP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_flap8lqbwK2nb2PP',
        spanInst,
        'sd_flap8lqbwK2nb2PP'
      );
    }
  }

  async sd_FpxzBN54euX5DNEa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FpxzBN54euX5DNEa',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VkVrkyaHJD0J1pKG(bh, parentSpanInst);
      //appendnew_next_sd_FpxzBN54euX5DNEa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FpxzBN54euX5DNEa',
        spanInst,
        'sd_FpxzBN54euX5DNEa'
      );
    }
  }

  async sd_VkVrkyaHJD0J1pKG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VkVrkyaHJD0J1pKG',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RzdeRhZUNrzZz2fa(bh, parentSpanInst);
      //appendnew_next_sd_VkVrkyaHJD0J1pKG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VkVrkyaHJD0J1pKG',
        spanInst,
        'sd_VkVrkyaHJD0J1pKG'
      );
    }
  }

  async sd_RzdeRhZUNrzZz2fa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RzdeRhZUNrzZz2fa',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.result.value.email,
        subject: 'FNB ACCOUNT',
        from: 'FNB',
        ptag: `<p>Your Application Has been Declined</p>
    <h2>REASON FOR DECLINE</h2>
    <P>${bh.input.body.reason}</P>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CQzJhhRKoxIiX8E2(bh, parentSpanInst);
      //appendnew_next_sd_RzdeRhZUNrzZz2fa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RzdeRhZUNrzZz2fa',
        spanInst,
        'sd_RzdeRhZUNrzZz2fa'
      );
    }
  }

  async sd_CQzJhhRKoxIiX8E2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CQzJhhRKoxIiX8E2',
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
      await this.sd_zyVI0ok8Al20CB2T(bh, parentSpanInst);
      //appendnew_next_sd_CQzJhhRKoxIiX8E2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CQzJhhRKoxIiX8E2',
        spanInst,
        'sd_CQzJhhRKoxIiX8E2'
      );
    }
  }

  async sd_zyVI0ok8Al20CB2T(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zyVI0ok8Al20CB2T');
    }
  }

  async sd_GgM7zUZye6XPGEA4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GgM7zUZye6XPGEA4',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'limits',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_u5lnNRYl49xDikQA(bh, parentSpanInst);
      //appendnew_next_sd_GgM7zUZye6XPGEA4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GgM7zUZye6XPGEA4',
        spanInst,
        'sd_GgM7zUZye6XPGEA4'
      );
    }
  }

  async sd_u5lnNRYl49xDikQA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u5lnNRYl49xDikQA',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iTM3rmskviHDLOGP(bh, parentSpanInst);
      //appendnew_next_sd_u5lnNRYl49xDikQA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u5lnNRYl49xDikQA',
        spanInst,
        'sd_u5lnNRYl49xDikQA'
      );
    }
  }

  async sd_iTM3rmskviHDLOGP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iTM3rmskviHDLOGP',
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
        bh = await this.sd_b9TWBY7XuaPTvG16(bh, parentSpanInst);
      } else {
        bh = await this.sd_c7L0WdtIBtxzKEiF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iTM3rmskviHDLOGP',
        spanInst,
        'sd_iTM3rmskviHDLOGP'
      );
    }
  }

  async sd_b9TWBY7XuaPTvG16(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b9TWBY7XuaPTvG16',
      parentSpanInst
    );
    try {
      console.log('Limits ', bh.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RFRvHDXH60P9ftLX(bh, parentSpanInst);
      //appendnew_next_sd_b9TWBY7XuaPTvG16
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b9TWBY7XuaPTvG16',
        spanInst,
        'sd_b9TWBY7XuaPTvG16'
      );
    }
  }

  async sd_RFRvHDXH60P9ftLX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RFRvHDXH60P9ftLX');
    }
  }

  async sd_c7L0WdtIBtxzKEiF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c7L0WdtIBtxzKEiF',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BYK620ItCWsivnMd(bh, parentSpanInst);
      //appendnew_next_sd_c7L0WdtIBtxzKEiF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c7L0WdtIBtxzKEiF',
        spanInst,
        'sd_c7L0WdtIBtxzKEiF'
      );
    }
  }

  async sd_BYK620ItCWsivnMd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BYK620ItCWsivnMd',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'limits',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RFRvHDXH60P9ftLX(bh, parentSpanInst);
      //appendnew_next_sd_BYK620ItCWsivnMd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BYK620ItCWsivnMd',
        spanInst,
        'sd_BYK620ItCWsivnMd'
      );
    }
  }

  async sd_3yx5lMlq794tyhIu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3yx5lMlq794tyhIu',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t0rBgskoFLD9xVwX(bh, parentSpanInst);
      //appendnew_next_sd_3yx5lMlq794tyhIu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3yx5lMlq794tyhIu',
        spanInst,
        'sd_3yx5lMlq794tyhIu'
      );
    }
  }

  async sd_t0rBgskoFLD9xVwX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t0rBgskoFLD9xVwX',
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
      await this.sd_0pG3OydPZemivF1R(bh, parentSpanInst);
      //appendnew_next_sd_t0rBgskoFLD9xVwX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t0rBgskoFLD9xVwX',
        spanInst,
        'sd_t0rBgskoFLD9xVwX'
      );
    }
  }

  async sd_0pG3OydPZemivF1R(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0pG3OydPZemivF1R');
    }
  }

  async sd_d72ESEeBH1cYuKnQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d72ESEeBH1cYuKnQ',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'limits',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RGRUCMF1o5AwFk7l(bh, parentSpanInst);
      //appendnew_next_sd_d72ESEeBH1cYuKnQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d72ESEeBH1cYuKnQ',
        spanInst,
        'sd_d72ESEeBH1cYuKnQ'
      );
    }
  }

  async sd_RGRUCMF1o5AwFk7l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RGRUCMF1o5AwFk7l',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Rn6xAAYlGSrXBvv2(bh, parentSpanInst);
      //appendnew_next_sd_RGRUCMF1o5AwFk7l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RGRUCMF1o5AwFk7l',
        spanInst,
        'sd_RGRUCMF1o5AwFk7l'
      );
    }
  }

  async sd_Rn6xAAYlGSrXBvv2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rn6xAAYlGSrXBvv2',
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
        bh = await this.sd_Lx4TSlx35L6Y1zpD(bh, parentSpanInst);
      } else {
        bh = await this.sd_4Vov9krK6nwQH13w(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rn6xAAYlGSrXBvv2',
        spanInst,
        'sd_Rn6xAAYlGSrXBvv2'
      );
    }
  }

  async sd_Lx4TSlx35L6Y1zpD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lx4TSlx35L6Y1zpD',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Mpq4MTLG6cp2URu7(bh, parentSpanInst);
      //appendnew_next_sd_Lx4TSlx35L6Y1zpD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lx4TSlx35L6Y1zpD',
        spanInst,
        'sd_Lx4TSlx35L6Y1zpD'
      );
    }
  }

  async sd_Mpq4MTLG6cp2URu7(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mpq4MTLG6cp2URu7');
    }
  }

  async sd_4Vov9krK6nwQH13w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Vov9krK6nwQH13w',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_Mpq4MTLG6cp2URu7(bh, parentSpanInst);
      //appendnew_next_sd_4Vov9krK6nwQH13w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Vov9krK6nwQH13w',
        spanInst,
        'sd_4Vov9krK6nwQH13w'
      );
    }
  }

  async sd_tUDN48AN90NHUTKL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tUDN48AN90NHUTKL',
      parentSpanInst
    );
    try {
      bh.result = 'App is running';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1eFUS5HZikYHIx7u(bh, parentSpanInst);
      //appendnew_next_sd_tUDN48AN90NHUTKL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tUDN48AN90NHUTKL',
        spanInst,
        'sd_tUDN48AN90NHUTKL'
      );
    }
  }

  async sd_1eFUS5HZikYHIx7u(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1eFUS5HZikYHIx7u');
    }
  }

  async sd_SRcEjTK7ZizqL04P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SRcEjTK7ZizqL04P',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uC4LekSuDyca2jIZ(bh, parentSpanInst);
      //appendnew_next_sd_SRcEjTK7ZizqL04P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SRcEjTK7ZizqL04P',
        spanInst,
        'sd_SRcEjTK7ZizqL04P'
      );
    }
  }

  async sd_uC4LekSuDyca2jIZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uC4LekSuDyca2jIZ',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9nkTMpRnpiY4TIvQ(bh, parentSpanInst);
      //appendnew_next_sd_uC4LekSuDyca2jIZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uC4LekSuDyca2jIZ',
        spanInst,
        'sd_uC4LekSuDyca2jIZ'
      );
    }
  }

  async sd_9nkTMpRnpiY4TIvQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9nkTMpRnpiY4TIvQ',
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
        bh = await this.sd_h64qsgVN5PLnSQ9s(bh, parentSpanInst);
      } else {
        bh = await this.sd_yW2KEcl6Gn79kSEj(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9nkTMpRnpiY4TIvQ',
        spanInst,
        'sd_9nkTMpRnpiY4TIvQ'
      );
    }
  }

  async sd_h64qsgVN5PLnSQ9s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h64qsgVN5PLnSQ9s',
      parentSpanInst
    );
    try {
      // const bcrypt = require('bcrypt');
      bh.result = bh.result[0];

      // bh.match = await bcrypt.compare(bh.input.body.pin, bh.result.pin);

      console.log('BH result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BTfS12GC9YBKZYn0(bh, parentSpanInst);
      //appendnew_next_sd_h64qsgVN5PLnSQ9s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h64qsgVN5PLnSQ9s',
        spanInst,
        'sd_h64qsgVN5PLnSQ9s'
      );
    }
  }

  async sd_BTfS12GC9YBKZYn0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BTfS12GC9YBKZYn0',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.pin,
          bh.input.body.pin,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aVGWOsgI9efK0KAN(bh, parentSpanInst);
      } else {
        bh = await this.sd_tMdhBl97d3c5Jt3x(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BTfS12GC9YBKZYn0',
        spanInst,
        'sd_BTfS12GC9YBKZYn0'
      );
    }
  }

  async sd_aVGWOsgI9efK0KAN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aVGWOsgI9efK0KAN',
      parentSpanInst
    );
    try {
      bh.status = 200;
      console.log('Match match');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rLxbiwTDWAZuLEr6(bh, parentSpanInst);
      //appendnew_next_sd_aVGWOsgI9efK0KAN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aVGWOsgI9efK0KAN',
        spanInst,
        'sd_aVGWOsgI9efK0KAN'
      );
    }
  }

  async sd_rLxbiwTDWAZuLEr6(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rLxbiwTDWAZuLEr6');
    }
  }

  async sd_tMdhBl97d3c5Jt3x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tMdhBl97d3c5Jt3x',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PIN DON'T MATCH",
      };
      console.log('NO Match match');

      this.tracerService.sendData(spanInst, bh);
      await this.sd_rLxbiwTDWAZuLEr6(bh, parentSpanInst);
      //appendnew_next_sd_tMdhBl97d3c5Jt3x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tMdhBl97d3c5Jt3x',
        spanInst,
        'sd_tMdhBl97d3c5Jt3x'
      );
    }
  }

  async sd_yW2KEcl6Gn79kSEj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yW2KEcl6Gn79kSEj',
      parentSpanInst
    );
    try {
      console.log('Error Error');
      bh.status = 404;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rLxbiwTDWAZuLEr6(bh, parentSpanInst);
      //appendnew_next_sd_yW2KEcl6Gn79kSEj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yW2KEcl6Gn79kSEj',
        spanInst,
        'sd_yW2KEcl6Gn79kSEj'
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
  //appendnew_flow_auth_Catch
}
