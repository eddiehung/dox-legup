var classllvm_1_1GenericSchedulerBase =
[
    [ "CandPolicy", "db/d35/structllvm_1_1GenericSchedulerBase_1_1CandPolicy.html", "db/d35/structllvm_1_1GenericSchedulerBase_1_1CandPolicy" ],
    [ "SchedCandidate", "d8/da6/structllvm_1_1GenericSchedulerBase_1_1SchedCandidate.html", "d8/da6/structllvm_1_1GenericSchedulerBase_1_1SchedCandidate" ],
    [ "SchedResourceDelta", "d5/dba/structllvm_1_1GenericSchedulerBase_1_1SchedResourceDelta.html", "d5/dba/structllvm_1_1GenericSchedulerBase_1_1SchedResourceDelta" ],
    [ "CandReason", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54f", [
      [ "NoCand", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa810d389a7def234e94c2631683ab0ece", null ],
      [ "PhysRegCopy", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54faee4fcb08b686fc009297fbfcf21d6048", null ],
      [ "RegExcess", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa01d264553167fb005aba23a6d2a6e9bb", null ],
      [ "RegCritical", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa974161ce84e375b6d40bd8855c29dd7f", null ],
      [ "Stall", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fab6aae8902e724a36ed16d537784777a2", null ],
      [ "Cluster", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa5a905614458af47ec4a5054a53d23e1b", null ],
      [ "Weak", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54faed8b719fe1a669c2fed4bacc6f46e8df", null ],
      [ "RegMax", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa01ef8d8423fe645e50ad5a179b4f4483", null ],
      [ "ResourceReduce", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa56637d3435d7e1953a615371cfe4d5ec", null ],
      [ "ResourceDemand", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa07409a8a5b9657af23f0a1c962f5c0c1", null ],
      [ "BotHeightReduce", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa8ea4d71243c1b82d5e35065d580c1e49", null ],
      [ "BotPathReduce", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fad3c3c8a47c777d0f591ca18eaf7000d4", null ],
      [ "TopDepthReduce", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fafb16e35278ff80f34d2ad9889213b406", null ],
      [ "TopPathReduce", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54fa768a7f66e30d6b2d2d81ab1af56bf6c4", null ],
      [ "NextDefUse", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54faf9d4eb6d4d0ca011ccbb24f139c9bf73", null ],
      [ "NodeOrder", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a401073e8c15613250bd3613b3ab1a54faa00a8e5741a604eb07320e981473b4e7", null ]
    ] ],
    [ "GenericSchedulerBase", "df/d9a/classllvm_1_1GenericSchedulerBase.html#abf7a31296b8d3ede091a25b7777c3a15", null ],
    [ "getReasonStr", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a9df77ae80f822b788cb2464992a05bc1", null ],
    [ "initialize", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a42eed718d961aaef1f3715e91e3ccaf7", null ],
    [ "initPolicy", "df/d9a/classllvm_1_1GenericSchedulerBase.html#ae3ec4fd225f0e252e6dfabc03d0903bf", null ],
    [ "pickNode", "df/d9a/classllvm_1_1GenericSchedulerBase.html#aab4a16da4cdec2f4f4a3175834ccd4c1", null ],
    [ "registerRoots", "df/d9a/classllvm_1_1GenericSchedulerBase.html#af9b2f5ad8048d175fc88cbd6684ac720", null ],
    [ "releaseBottomNode", "df/d9a/classllvm_1_1GenericSchedulerBase.html#aee56664b72ea174c22ef095dc828a0b5", null ],
    [ "releaseTopNode", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a870625307391612fc91db410cf9820b0", null ],
    [ "schedNode", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a3be6a6d3b879d048d8df6ae13c7b9698", null ],
    [ "scheduleTree", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a3a8386beb0371134711bb85e91c5e616", null ],
    [ "setPolicy", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a8668556014566994c07b21391762551b", null ],
    [ "shouldTrackPressure", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a1d54e917bcbe822353364a34648f5840", null ],
    [ "traceCandidate", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a0fc28b204833d49b88dbeceb366b7439", null ],
    [ "Context", "df/d9a/classllvm_1_1GenericSchedulerBase.html#ad0f9f52bf2f7c54d9546cedd1c47ef45", null ],
    [ "Rem", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a3cab76d375dbb626e5179b96f84fd3dc", null ],
    [ "SchedModel", "df/d9a/classllvm_1_1GenericSchedulerBase.html#a9730ea0068843718868a8667f52e3680", null ],
    [ "TRI", "df/d9a/classllvm_1_1GenericSchedulerBase.html#ae9476ffbc2f3f195a2116b13f3186194", null ]
];