var classllvm_1_1HexagonTargetLowering =
[
    [ "ArgListTy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab6132d2ff56c64c551cf71e714dbb5c2", null ],
    [ "AsmOperandInfoVector", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a08a19e975c43ee759d51b879a0f2c75c", null ],
    [ "LegalizeKind", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a19cbae8975348c7c0681645d423529b1", null ],
    [ "BooleanContent", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa61af767c51a95e2dd0dff2001168755", [
      [ "UndefinedBooleanContent", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa61af767c51a95e2dd0dff2001168755a145391af8fd5e5455ffa3170c2d701ce", null ],
      [ "ZeroOrOneBooleanContent", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa61af767c51a95e2dd0dff2001168755a0e2d72cfdcc49d2d189f440b3cc31dff", null ],
      [ "ZeroOrNegativeOneBooleanContent", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa61af767c51a95e2dd0dff2001168755a695a19c9c3ae14638be151add82755cb", null ]
    ] ],
    [ "ConstraintType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116", [
      [ "C_Register", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116a85f9b8131f0608c03c58e4e23d875dfc", null ],
      [ "C_RegisterClass", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116a1d7718fd43ac0a5c715686a76f9cfd89", null ],
      [ "C_Memory", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116a420d729d2e7d056ec884c094ccdc4467", null ],
      [ "C_Other", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116abc9c279d343d2f957ab51b37ff39e88e", null ],
      [ "C_Unknown", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b0176781cd4fd9f45cc739f1d007116ad4cd486b7360ed34c9553b6c9056b764", null ]
    ] ],
    [ "ConstraintWeight", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abc", [
      [ "CW_Invalid", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca2a03cc05a305d0cd861ff2d070da40ca", null ],
      [ "CW_Okay", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abcad2cf3d9c529f93c9afe82c16053bc0e3", null ],
      [ "CW_Good", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca69e2895d90783dc2ab3efe070397cbea", null ],
      [ "CW_Better", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca3054688f1464c0691ef2ef5e581276a8", null ],
      [ "CW_Best", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abcaeadafdb6717a390cbe0c3ee93a0b1a2c", null ],
      [ "CW_SpecificReg", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca8f769b6cac1ebb4de9412ecfe92fe20d", null ],
      [ "CW_Register", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abcaa36ab38b266c612487d9ff61df7475af", null ],
      [ "CW_Memory", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca5b8290e7824d2be12d9886e17c7aedd6", null ],
      [ "CW_Constant", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abca632c68154579a54426d0841e490ddb40", null ],
      [ "CW_Default", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f5cab5437026605269663cda7389abcad4df0dd48c58dea43776a5a77e74ba76", null ]
    ] ],
    [ "LegalizeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2856b7fb24e0784cfc29ddfd5be74d1b", [
      [ "Legal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2856b7fb24e0784cfc29ddfd5be74d1bad7ff2d7a7c03a214dda559fac717cd99", null ],
      [ "Promote", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2856b7fb24e0784cfc29ddfd5be74d1baba91ac521e4f01f57413216273fd7b7f", null ],
      [ "Expand", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2856b7fb24e0784cfc29ddfd5be74d1ba4b85349547c5b6126817e10152007931", null ],
      [ "Custom", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2856b7fb24e0784cfc29ddfd5be74d1ba3441acf8576e4bbf48e9bd73ca3c0d8c", null ]
    ] ],
    [ "LegalizeTypeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193", [
      [ "TypeLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193af54ec6880362512f9fec982cd4ce39fb", null ],
      [ "TypePromoteInteger", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a26f35604723482a1aee6514940c2987d", null ],
      [ "TypeExpandInteger", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a5c111d159cec321b85802cb1baba7f12", null ],
      [ "TypeSoftenFloat", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a2f11b8376488870063cf0c3036fb9577", null ],
      [ "TypeExpandFloat", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a43bc669b0f21542131c6623548c567e3", null ],
      [ "TypeScalarizeVector", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193aba2534b602f98a2952464c3682a39dbc", null ],
      [ "TypeSplitVector", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a40cd81ebfaf97cef327ad65d37b816da", null ],
      [ "TypeWidenVector", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a88a8b01d4dbc2ebd81244d1eb459b193a5290057031a9bc71850f61e757cb940e", null ]
    ] ],
    [ "SelectSupportKind", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a575e134a5e8414029a5c4a284858e6cd", [
      [ "ScalarValSelect", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a575e134a5e8414029a5c4a284858e6cda87a93c29e9b581a0845c5cd878a8d3b7", null ],
      [ "ScalarCondVectorVal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a575e134a5e8414029a5c4a284858e6cda14714058f9e9eb27b0a4ec62d23bddd5", null ],
      [ "VectorMaskSelect", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a575e134a5e8414029a5c4a284858e6cda57d13a184979a5a9b7110c20e9d6f55d", null ]
    ] ],
    [ "HexagonTargetLowering", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aaa918f107c712ca1b71e24c5fea872d6", null ],
    [ "addBypassSlowDiv", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3ebc673c7187aba992cc6925c27d47b5", null ],
    [ "AddPromotedToType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab8c490e0623b6a0e2c12c12e0d924abe", null ],
    [ "addRegisterClass", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7c45a718f16057459d95d09d42ec6902", null ],
    [ "AdjustInstrPostInstrSelection", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aca07be3ac02177b296b44111af460e72", null ],
    [ "allowsUnalignedMemoryAccesses", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa232b7c824712783a56e10cfa5e7000b", null ],
    [ "allowTruncateForTailCall", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6b5e20840f3da6bd17be57947204f8c9", null ],
    [ "BuildExactSDIV", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7a33b92b3fcd1a90d99a026c3055f4d5", null ],
    [ "BuildSDIV", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2e6274302270047b50a4b93d0e2b33fc", null ],
    [ "BuildUDIV", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a73a4fb1d596936584895739047dee5a9", null ],
    [ "CanLowerReturn", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2935c22c9eb25e9c7eaad81a58af9a84", null ],
    [ "canOpTrap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a877509d30dce736625e19e3821c8ad08", null ],
    [ "CanReturnSmallStruct", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afc9ebe4bb927cef23a3d9f4f33a51322", null ],
    [ "clearOperationActions", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a832c88c01b12ff8e98882eaf50f8bfcb", null ],
    [ "clearRegisterClasses", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af05548e38afbf4764d12b0330a239236", null ],
    [ "ComputeConstraintToUse", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5befaeb1cc993ad6b1fdbce93d824a63", null ],
    [ "computeKnownBitsForTargetNode", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a11c55c99747afca33139f0deec9ad045", null ],
    [ "ComputeNumSignBitsForTargetNode", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a43bf3ef6e76fa286a5776cd0da592458", null ],
    [ "computeRegisterProperties", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a753a20275871056d766d24354dfbc058", null ],
    [ "createFastISel", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac0464176c5e6cc20826b9ad8495067df", null ],
    [ "EmitInstrWithCustomInserter", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a73c3a764384ecab56c047008baf5d946", null ],
    [ "emitLoadLinked", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af8032c4af1ce30bb4084a4df288cf796", null ],
    [ "emitPatchPoint", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6dad36981e3ef34acc76dfebe5aeca43", null ],
    [ "emitStoreConditional", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac6072149b029681b1fefc29cba0be621", null ],
    [ "expandFP_TO_SINT", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae5eb2f01ac8e91bd61d963e4ef10779a", null ],
    [ "ExpandInlineAsm", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a771d3d497d9e43ede717da0de89bddd9", null ],
    [ "expandMUL", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae43cef1217478998ca1f7ef77bf7b021", null ],
    [ "findRepresentativeClass", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aacd05a12e7f76e2367bd290d7ab433bb", null ],
    [ "functionArgumentNeedsConsecutiveRegisters", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa49286a6251cf425a8421c4264f231ca", null ],
    [ "GetAddrModeArguments", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a30229acc04bee7c28270c02d207ef1a4", null ],
    [ "getBooleanContents", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a25bad7b5494a1f0e3347f8f75c6ad305", null ],
    [ "getBooleanContents", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae4dad0be98467143bc87925c38b02263", null ],
    [ "getBypassSlowDivWidths", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab5855cdba8a0aa2a1b434f19ac584c40", null ],
    [ "getByValTypeAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5b9cdbfae0f9a85819c3cd6c8b7d7858", null ],
    [ "getClearCacheBuiltinName", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a85d5c2aebb33e2e8a6d2988ececa3134", null ],
    [ "getCmpLibcallCC", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad20ddaa3781a0107f7639e9e1b2fbcd1", null ],
    [ "getCmpLibcallReturnType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa229c64a3247a0501bc4b4e4ffb0093f", null ],
    [ "getCondCodeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a209c96f34c30dd63fe49dc9ebd62e1b4", null ],
    [ "getConstraintType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a31d6dacf27b7608783e33351e082bbba", null ],
    [ "getDataLayout", "db/d9d/classllvm_1_1HexagonTargetLowering.html#adc25bcc279ccfb5b867c2b7b8eedaa9b", null ],
    [ "getExceptionPointerRegister", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a379390e6e048f8ca705088a49a8e63cf", null ],
    [ "getExceptionSelectorRegister", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3d112c6b76529fc7b236cf3069b4de57", null ],
    [ "getExtendForContent", "db/d9d/classllvm_1_1HexagonTargetLowering.html#affa111c5fcedf4f9c7eaf11be9977f32", null ],
    [ "getIndexedLoadAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9d34407d6650a6e9dbd04530d6622cc6", null ],
    [ "getIndexedStoreAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a1b858bc04884adb3215318592245cb51", null ],
    [ "getInsertFencesForAtomic", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9a35accd3d50bf8dc5cf913e15691fd5", null ],
    [ "getJumpBufAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab455548e7667d3bb50c22716bd716af5", null ],
    [ "getJumpBufSize", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa92bc710d28ef509b6cb8f4ab526a983", null ],
    [ "getJumpTableEncoding", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9eda7207e414fe3b44f80123cb6722d3", null ],
    [ "getLibcallCallingConv", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8aef10a8f589915cb44aba1bd5532902", null ],
    [ "getLibcallName", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2fd6621544f6f8e8490d81e5f6850f09", null ],
    [ "getLoadExtAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6fdfef7aad91e828ecffc8b6d6d5dfd1", null ],
    [ "getMaximalGlobalOffset", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a881757809e41c2373a168152e7b55a81", null ],
    [ "getMaxStoresPerMemcpy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a95f1a6769db45a5e7f077988c0057da4", null ],
    [ "getMaxStoresPerMemmove", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af9b41e64c0ddff4d086270fce4bef087", null ],
    [ "getMaxStoresPerMemset", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0baa9e7d55a38c18fd3b3a9e392868af", null ],
    [ "getMinFunctionAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a15ab2a082e6eb09f415438667f5e1d01", null ],
    [ "getMinimumJumpTableEntries", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2b852f879653b205ae28bb79f159bfcd", null ],
    [ "getMinStackArgumentAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae7b5227564e325561be4958734eab946", null ],
    [ "getMultipleConstraintMatchWeight", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa5b326161e780914fc257bda1f50da2c", null ],
    [ "getNumRegisters", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a00a407e9023347f3fd2af3d8d3e7c236", null ],
    [ "getObjFileLowering", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aebdc844e4a1653a9d630e03d48dd5d8a", null ],
    [ "getOperationAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae7ff3b0592782cde529b9a16833b44d0", null ],
    [ "getOptimalMemOpType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac02f313096355af0ffbc39a04735ffc3", null ],
    [ "getPICJumpTableRelocBase", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a972c7709b4cb5bf63c1f3e524b3d4cef", null ],
    [ "getPICJumpTableRelocBaseExpr", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a014f56e26f47277c4c683f4451ba2f0a", null ],
    [ "getPointerSizeInBits", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac524ed76b02499b0cbccea8529b7b740", null ],
    [ "getPointerTy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2824c264a25f2f03586588c7020b7a5d", null ],
    [ "getPointerTypeSizeInBits", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae9f8a034302273f27706cd102320156a", null ],
    [ "getPostIndexedAddressParts", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a391ef092ff421faccdfef4cb88424742", null ],
    [ "getPreferredVectorAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7c4e7b08d36d67f99b23f92caf81b71c", null ],
    [ "getPrefFunctionAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4256af81094f7170cb8658ae4c3cb33a", null ],
    [ "getPrefLoopAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6f7955dbac81068ee5d188470ca1f995", null ],
    [ "getPreIndexedAddressParts", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0494f569df118d504e92cbe003d96319", null ],
    [ "getRegClassFor", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a71b07ff24aaa94d58e0e7c35551728d5", null ],
    [ "getRegForInlineAsmConstraint", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a07e75e9bcb78e7c99756799bead65b93", null ],
    [ "getRegisterByName", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6e33400527ce2cfbc84cafb11787ddf6", null ],
    [ "getRegisterType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a10bc5b2e0763622eca2e439b0961ed49", null ],
    [ "getRegisterType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aff2de6a23e926fcdc740673b5cc21ada", null ],
    [ "getRepRegClassCostFor", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a962592f9d8e8db865060de86d1cd9630", null ],
    [ "getRepRegClassFor", "db/d9d/classllvm_1_1HexagonTargetLowering.html#abfe348b051b61449a611f0194761fccf", null ],
    [ "getScalarShiftAmountTy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0a5f9cfaec7239ea289716ff11c8e56a", null ],
    [ "getScalingFactorCost", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4578e7af95750ee7723e538fe8c9bb6a", null ],
    [ "getSchedulingPreference", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4f38ed3108a79a3a939a93391130d105", null ],
    [ "getSchedulingPreference", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b8a3a914039d67c229f92a5f618fe78", null ],
    [ "getScratchRegisters", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad55d01549a5c6add00b01100283484fd", null ],
    [ "getSetCCResultType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#acb068b574756d6812cc5bd5359d420ca", null ],
    [ "getShiftAmountTy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a58ed4a7f98979bd844f1d65fb01c2187", null ],
    [ "getSimpleValueType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac3e0b72e8902cee6a1bd4b2d31ca1d30", null ],
    [ "getSingleConstraintMatchWeight", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a04dfb06ba2391546356e8245899ae8cf", null ],
    [ "getStackCookieLocation", "db/d9d/classllvm_1_1HexagonTargetLowering.html#adb10fd11ab961c8c38e43bd5578b378e", null ],
    [ "getStackPointerRegisterToSaveRestore", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa564d518ce720130a5c2b886b78ff475", null ],
    [ "getTargetMachine", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ada5f4a5dd489c777870538cdbb6da228", null ],
    [ "getTargetNodeName", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8da8b6fe58e716d5bb94430b6f5600ce", null ],
    [ "getTgtMemIntrinsic", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4f3aa6fc0ecfb26a0d84841dddcd9980", null ],
    [ "getTruncStoreAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad5822195341ef5bc50ef3c83eb9f62d0", null ],
    [ "getTypeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7b93b105a426bc0eda1eadd856aa195e", null ],
    [ "getTypeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afc079efb1a03527cab2757e28c67a669", null ],
    [ "getTypeConversion", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5368e36eaf87d8d19efa8e398cb55bea", null ],
    [ "getTypeForExtArgOrReturn", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2f1b8e333abadbbced6d1dc77207d701", null ],
    [ "getTypeLegalizationCost", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a77e3684e2ae264eecf4491b2e9e757c5", null ],
    [ "getTypeToExpandTo", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a83845bbfd1d46968374136e9d02dce68", null ],
    [ "getTypeToPromoteTo", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aff20b56cf57a9270bef871bc2c9103a1", null ],
    [ "getTypeToTransformTo", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a76daffc43a9b516f4fe4999c7b680ca0", null ],
    [ "getValueType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9a29cc66e132c19330ddabb82d44bef7", null ],
    [ "getValueTypeActions", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3b3ef8b7444df65bec7d51478e42e977", null ],
    [ "getVectorIdxTy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a867f81380094404dbe04ed9b7bc26a99", null ],
    [ "getVectorTypeBreakdown", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aed0fdcb23ed1890522694e44a8a24a47", null ],
    [ "HandleByVal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a98a8ba77f69ab3a974a9ab13f505ae11", null ],
    [ "hasBigEndianPartOrdering", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2d546b8d1f56f64c575eb80207d0cc92", null ],
    [ "hasExtractBitsInsn", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af956c54d5d6b89ed9e1837010820e183", null ],
    [ "hasMultipleConditionRegisters", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aaaaf0897928288f98b3319ddddc8673e", null ],
    [ "hasPairedLoad", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae7d446bc1191d9697de0c14fc8c2fb78", null ],
    [ "hasPairedLoad", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a05b9771f073c5ae6a173220a4bcc5657", null ],
    [ "hasTargetDAGCombine", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a813157446ae8d1335ffcb82161f40f84", null ],
    [ "initActions", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0b793dc0bbf21627a4e8a2b4c7962c20", null ],
    [ "InstructionOpcodeToISD", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad0f1b1c62254e7dbd1794305eda5c15e", null ],
    [ "isBigEndian", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a785a8016a792dbc65ec16688f180af71", null ],
    [ "isCondCodeLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5915acdb20d31a79440117652c5232ec", null ],
    [ "isConstFalseVal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2b407f94a22bd8f3068b255696e1a177", null ],
    [ "isConstTrueVal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afc458e58ead159de81e6d46e788208e8", null ],
    [ "isDesirableToCommuteWithShift", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a06f40fab9ff50af6badc0fe1be5c223f", null ],
    [ "IsDesirableToPromoteOp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae66d05287096fa4d278d0c5b763fd639", null ],
    [ "isDesirableToTransformToIntegerOp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afe39ddd0add24d96bfbbb2b3ab3df3de", null ],
    [ "IsEligibleForTailCallOptimization", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a51f4f21f2204e65ed03b70266c86777e", null ],
    [ "isFAbsFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a03d795b93578bd5b530aa998869fb1ac", null ],
    [ "isFMAFasterThanFMulAndFAdd", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8cbe090e0985c49fdc3d9b27b42788f0", null ],
    [ "isFNegFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a814573c6f6263d6f7b463ce0a591781a", null ],
    [ "isFPImmLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a180f878e7f33e93a15bfec86cde1fdc2", null ],
    [ "isGAPlusOffset", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a420dad7978ef954f8d674eba24eb840e", null ],
    [ "isIndexedLoadLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9c8b7aaed941ee853da98aafd6739af6", null ],
    [ "isIndexedStoreLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4fe606f87214ac58150a6c99bde8db84", null ],
    [ "isInTailCallPosition", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad7c04d55c088f06e77efe97adca42c7e", null ],
    [ "isIntDivCheap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#adb45e7ad0a527824d12e1705864e577e", null ],
    [ "isJumpExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#acfddcd7e99d475a705858561279dd2c4", null ],
    [ "isLegalAddImmediate", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a62fd51d57f54699226813ca9b46c4d24", null ],
    [ "isLegalAddressingMode", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aaacba95a692f4531efa6c2151d56cb27", null ],
    [ "isLegalICmpImmediate", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2e266472b2d7351f92aa8a1d51d05fec", null ],
    [ "isLegalRC", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a41f7f3d52ee5628d5492eb1e4ae0c1ea", null ],
    [ "isLittleEndian", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7fe87806292e4bb35d59a51930f3ae0e", null ],
    [ "isLoadBitCastBeneficial", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aebbd7a2d93f67bd693cdac43795dc9d4", null ],
    [ "isLoadExtLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad85f712b9e49629c2c160f16521fe91f", null ],
    [ "isMaskAndBranchFoldingLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afefc72cda8ee9991f74e323abe90053a", null ],
    [ "isNarrowingProfitable", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a52dbd9fc4ea2c0919913e74e003b2823", null ],
    [ "isNoopAddrSpaceCast", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad5c8a6195875f93eab1811e5484fdf74", null ],
    [ "isOffsetFoldingLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6634fc60337427fd6c33e851a4ff45ad", null ],
    [ "isOperationExpand", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9ee8b43bd8f82fb82c008b960f184194", null ],
    [ "isOperationLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a055b3905dbbc16fae11510b9ebd1e00c", null ],
    [ "isOperationLegalOrCustom", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a087dd0f9650e999b087c17cc7f46f2d0", null ],
    [ "isOperationLegalOrPromote", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5cdc20935a907a922a54af34fd55a630", null ],
    [ "isPow2DivCheap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab119bc60a5d16c72edff3e7c21f05278", null ],
    [ "isPredictableSelectExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a261b689f3fa605f82d16529dae1e0505", null ],
    [ "isSafeMemOpType", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a86d67f6cd669ab7425f12fccd108bbb4", null ],
    [ "isSelectExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7919f62e1b293bc763e0152bf0cbc622", null ],
    [ "isSelectSupported", "db/d9d/classllvm_1_1HexagonTargetLowering.html#accc503512c4630f23cdd6a2915ec51f3", null ],
    [ "isShuffleMaskLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4b6d7bad7a605a9b0dd78978ee82ddab", null ],
    [ "isSlowDivBypassed", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a000a8be7042bc1612d92eaf864bc85a5", null ],
    [ "isTruncateFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a217b5b16e1040a5ad5578bd59f60f62b", null ],
    [ "isTruncateFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad8a821e221b81ea4fa8dc4653072ff1c", null ],
    [ "isTruncStoreLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aaf6cf7bea7d0293cd174427f2ba6f50f", null ],
    [ "isTypeDesirableForOp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab945eaf78cbe0a5e7cd0dbc3a6b92ae4", null ],
    [ "isTypeLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a861aaccc0f468493e76c011811548804", null ],
    [ "isUsedByReturnOnly", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afe07ca8ddf4a579777ba070a2d5b627a", null ],
    [ "isVectorClearMaskLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8612b7f63f97d7056a6c0858272e9edf", null ],
    [ "isVectorShiftByScalarCheap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aaae1c30e9d895c17529472dfb2d4e723", null ],
    [ "isZExtFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae40dacbf39edf0d87f07cc4389deaa67", null ],
    [ "isZExtFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7c1ecab2d300320f854412758c7aa7e5", null ],
    [ "isZExtFree", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad7525b1f1f76ae8c848b840f250828a2", null ],
    [ "LowerAsmOperandForConstraint", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af6ec97cdccccd552fe3234d495b95c70", null ],
    [ "LowerATOMIC_FENCE", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a93ea7764ac07bd81a1c3a59af9d34903", null ],
    [ "LowerBlockAddress", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8eb3a23bfd99db10a5ee629002bcffbc", null ],
    [ "LowerBR_JT", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a75f83743bcd97b783b8350741bbf8e35", null ],
    [ "LowerCall", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8bf369675e5b6f65ee56064965ee9ee6", null ],
    [ "LowerCallResult", "db/d9d/classllvm_1_1HexagonTargetLowering.html#abba40b2075ed17e8d492b267474d66e1", null ],
    [ "LowerCallTo", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a395ec1cfea698db112b7e8709dca547d", null ],
    [ "LowerConstantPool", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a16b246930c8a8f495fb32a13fad41b0b", null ],
    [ "LowerCustomJumpTableEntry", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa4a2ebfe574d287efcbdc8ea9ae6b51a", null ],
    [ "LowerDYNAMIC_STACKALLOC", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6e9a12233303b2d114d2f31c5fd42c38", null ],
    [ "LowerEH_LABEL", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad364b026139e1d9d2dec630b0581d75d", null ],
    [ "LowerEH_RETURN", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a58e1646c50a546c672d83fe210016569", null ],
    [ "LowerFormalArguments", "db/d9d/classllvm_1_1HexagonTargetLowering.html#acc93222f5657efb65594af11bd98b50a", null ],
    [ "LowerFRAMEADDR", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ac39075ba3937a00223136216dc5c3883", null ],
    [ "LowerGLOBALADDRESS", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae76a759f613dea787ee513ece97b254e", null ],
    [ "LowerINLINEASM", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a312e19db235dd1466533e1503a8c7ddc", null ],
    [ "LowerINTRINSIC_WO_CHAIN", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a67aa34b2d4560078b21bcf8156d519be", null ],
    [ "LowerOperation", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a67a8bd92219eb4fc0abad165a1019a10", null ],
    [ "LowerOperationWrapper", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5c35e509a927c280345678601e155ce1", null ],
    [ "LowerReturn", "db/d9d/classllvm_1_1HexagonTargetLowering.html#adde9d8457889a2472ff2ed1f87c5dc77", null ],
    [ "LowerRETURNADDR", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8bc8b011d438fc2243dd1eface0e8d0f", null ],
    [ "LowerVASTART", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6ffe1c6746830cf1a7f7c89ba323ebb6", null ],
    [ "LowerXConstraint", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae743321c66e315af8cc2c8e9edb85da7", null ],
    [ "makeLibCall", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a5fed073c60c10d850fd0674e76e7bc13", null ],
    [ "mayBeEmittedAsTailCall", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a70ecdf9b6b563848696f64eb03dc3105", null ],
    [ "ParseConstraints", "db/d9d/classllvm_1_1HexagonTargetLowering.html#acf45b67bb53a2c5b9f6ee1d1ecf57eae", null ],
    [ "PerformDAGCombine", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a23088f6e5065a437e6448022592ad85c", null ],
    [ "prepareVolatileOrAtomicLoad", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a63cab6aa40459761164a596c74bf04a1", null ],
    [ "ReplaceNodeResults", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a18263310fa576c9f859793984120ac59", null ],
    [ "resetOperationActions", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6358885daebc628e758d6323b969ed75", null ],
    [ "setBooleanContents", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6b928e5a6718acab4fa0030ce9198e8a", null ],
    [ "setBooleanContents", "db/d9d/classllvm_1_1HexagonTargetLowering.html#abc0bb1b25d261de12745e6114933b24a", null ],
    [ "setBooleanVectorContents", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0662d63e058816bf77a5b8f35331bd9d", null ],
    [ "setCmpLibcallCC", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a11d5723c448d435dce77417ce2b8cb01", null ],
    [ "setCondCodeAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a66b5dc9e9679a48aa49902e47d6c0770", null ],
    [ "setExceptionPointerRegister", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a900b4d73a7171f9329453e0aba673f73", null ],
    [ "setExceptionSelectorRegister", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7f928acc831c560457efb338d07df503", null ],
    [ "setHasExtractBitsInsn", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3eae9a1850a035894e633aef9d5fbacd", null ],
    [ "setHasMultipleConditionRegisters", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aeb09b1add015714789734df22b143112", null ],
    [ "setIndexedLoadAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afc21cf92ad41b655d26be24173440b0d", null ],
    [ "setIndexedStoreAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a2435670de567f1a77c9981c1737f5bee", null ],
    [ "setInsertFencesForAtomic", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a085e7ff99e231b703ab24b58bb3cb5a9", null ],
    [ "setIntDivIsCheap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a140b819a6cdd104f9813d6ad0dd5794b", null ],
    [ "setJumpBufAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0358c445ae1d127b38acd68269815844", null ],
    [ "setJumpBufSize", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0dc936ff5d4ae1a87d2e67edb7e7a654", null ],
    [ "setJumpIsExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4f8ed5be2186819928ee8f42feffee43", null ],
    [ "setLibcallCallingConv", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3b258bf80e376a39c623bf880461894b", null ],
    [ "setLibcallName", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8b36797b46a42e7b489e47c2d009bc1d", null ],
    [ "setLoadExtAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6b977e11e50382ce694e876961c4d272", null ],
    [ "setMinFunctionAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6742d41c6eee508ab6e885183f382ba7", null ],
    [ "setMinimumJumpTableEntries", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a71bdb5ad67cf875bf386c07150b7335c", null ],
    [ "setMinStackArgumentAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#abb99ee84c5bf07a45b913793848a3d50", null ],
    [ "setOperationAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a07c0c67913bb543fc45ce9ef65ef260a", null ],
    [ "setPow2DivIsCheap", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aafd8a231fedaa84f51066a4dfb719407", null ],
    [ "setPrefFunctionAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7229ed27a1fc24323231cd279cacee13", null ],
    [ "setPrefLoopAlignment", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4d383c42864a6a1a76aea52c2be5d41d", null ],
    [ "setSchedulingPreference", "db/d9d/classllvm_1_1HexagonTargetLowering.html#af2a24aed2ba5d4f9c8db9904df6fa635", null ],
    [ "setSelectIsExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6869182d35e4646a63ff549d28c6e9a2", null ],
    [ "setStackPointerRegisterToSaveRestore", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa978d53d0e324539ecc141fb0d84954b", null ],
    [ "setSupportJumpTables", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad70403ea15e3b94887d77a3bf17b1085", null ],
    [ "setTargetDAGCombine", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a07debef9c174231d513e1966ef50cd0a", null ],
    [ "setTruncStoreAction", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa243085e56636cc454143f916686c190", null ],
    [ "setUseUnderscoreLongJmp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a63ac79658a3e958b69781a8bcfa65639", null ],
    [ "setUseUnderscoreSetJmp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a3e43a72fb7a3e254f4cb150c3fd68dba", null ],
    [ "shouldConvertConstantLoadToIntImm", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6a48caf02a38f00708f308ad590340b4", null ],
    [ "shouldExpandAtomicInIR", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a05d4b27d678a8fa4be9f9965e3fd6bf4", null ],
    [ "shouldExpandBuildVectorWithShuffles", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ad21304694d608d6106b8163526e06cba", null ],
    [ "ShouldShrinkFPConstant", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a4317aa7642bad5c7faa3724730a2012c", null ],
    [ "SimplifyDemandedBits", "db/d9d/classllvm_1_1HexagonTargetLowering.html#acfbda80cc07884ccb7b267aaea403141", null ],
    [ "SimplifySetCC", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a8a9fc84a7385e8d42a0994df86eb50ec", null ],
    [ "softenSetCCOperands", "db/d9d/classllvm_1_1HexagonTargetLowering.html#abc46cfc2c24749f5abf533af40ad0c7c", null ],
    [ "supportJumpTables", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aa0e60f340ec3b17badbd172f8abf36fd", null ],
    [ "usesUnderscoreLongJmp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a1679ef16669e881935d82049832149d0", null ],
    [ "usesUnderscoreSetJmp", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ae227159707831c0ab2b9b740f6200c63", null ],
    [ "verifyReturnAddressArgumentIsConstant", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a307c9b15fb053cb34ae3d4f57cd6c1b8", null ],
    [ "MaskAndBranchFoldingIsLegal", "db/d9d/classllvm_1_1HexagonTargetLowering.html#afa6491e83c4168a6bcdae4275462b2bc", null ],
    [ "MaxStoresPerMemcpy", "db/d9d/classllvm_1_1HexagonTargetLowering.html#aefbee33131c130f8f691c9a482f5fc40", null ],
    [ "MaxStoresPerMemcpyOptSize", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a1695feb44cd6dd30c64697360f1e76d3", null ],
    [ "MaxStoresPerMemmove", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a6d0f43699563375800a45f45bc11ff49", null ],
    [ "MaxStoresPerMemmoveOptSize", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7800cede44a09d00fcc61b9087c20d85", null ],
    [ "MaxStoresPerMemset", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a9830bda9bf50bfdab4c10954cc6fb1ac", null ],
    [ "MaxStoresPerMemsetOptSize", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a67f472063b7db365d0b5da597871e03d", null ],
    [ "PredictableSelectIsExpensive", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a0cc366cf4e0b825191ca9babcf290286", null ],
    [ "TM", "db/d9d/classllvm_1_1HexagonTargetLowering.html#a7d05838d881b3a8fcacbcf5bbff63990", null ],
    [ "VarArgsFrameOffset", "db/d9d/classllvm_1_1HexagonTargetLowering.html#ab72e98d8ce5206bd0ac85af9cea97d3f", null ]
];