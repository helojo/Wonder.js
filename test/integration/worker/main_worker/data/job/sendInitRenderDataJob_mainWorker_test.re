open Wonder_jest;

let _ =
  describe(
    "test send init render data job",
    () => {
      open Expect;
      open Expect.Operators;
      open Sinon;
      let sandbox = getSandboxDefaultVal();
      beforeEach(
        () => {
          sandbox := createSandbox();
          TestToolMainWorker.initWithJobConfig(
            ~sandbox,
            ~workerJobConfig=WorkerJobConfigToolWorker.buildWorkerJobConfig(),
            ()
          )
        }
      );
      afterEach(() => restoreSandbox(refJsObjToSandbox(sandbox^)));
      testPromise(
        "send data",
        () =>
          MainInitJobToolMainWorkerTool.prepare()
          |> MainInitJobToolMainWorkerTool.test(
               sandbox,
               (postMessageToRenderWorker) =>
                 postMessageToRenderWorker
                 |> expect
                 |> toCalledWith([|{"operateType": "INIT_RENDER"}|])
             )
      );
      testPromise(
        "send after send job data",
        () =>
          MainInitJobToolMainWorkerTool.prepare()
          |> MainInitJobToolMainWorkerTool.test(
               sandbox,
               (postMessageToRenderWorker) =>
                 postMessageToRenderWorker
                 |> withOneArg({"operateType": "INIT_RENDER"})
                 |> expect
                 |> toCalledAfter(
                      postMessageToRenderWorker
                      |> withOneArg({
                           "operateType": "SEND_JOB_DATA",
                           "pipelineJobs": Sinon.matchAny,
                           "jobs": Sinon.matchAny
                         })
                    )
             )
      )
    }
  );