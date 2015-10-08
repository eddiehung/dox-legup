var lto_8h =
[
    [ "LTO_API_VERSION", "dc/d51/lto_8h.html#ga7cd7eb9fdade49e998bef7b80ea6c0e4", null ],
    [ "lto_bool_t", "dc/d51/lto_8h.html#a1f863f3727405a63300a2eaab9719e7a", null ],
    [ "lto_code_gen_t", "dc/d51/lto_8h.html#ga6e1ba6da4277057a20e147d9412a03d7", null ],
    [ "lto_diagnostic_handler_t", "dc/d51/lto_8h.html#ga8ad6a2ad5397817e1f6fc13cbd60031a", null ],
    [ "lto_module_t", "dc/d51/lto_8h.html#ga3ce415fd9e8109d4835461c6de1b9d82", null ],
    [ "lto_codegen_diagnostic_severity_t", "dc/d51/lto_8h.html#ga7d1dffbb71e58b376fc879b8098957b3", [
      [ "LTO_DS_ERROR", "dc/d51/lto_8h.html#gga7d1dffbb71e58b376fc879b8098957b3a56df7007d9125bb715a76233ba550933", null ],
      [ "LTO_DS_WARNING", "dc/d51/lto_8h.html#gga7d1dffbb71e58b376fc879b8098957b3a30389796c848e8df04427fb26ca4d477", null ],
      [ "LTO_DS_REMARK", "dc/d51/lto_8h.html#gga7d1dffbb71e58b376fc879b8098957b3a2f2659d7b052eff3b70bc3c6d70e67c5", null ],
      [ "LTO_DS_NOTE", "dc/d51/lto_8h.html#gga7d1dffbb71e58b376fc879b8098957b3a3f49e62e22757ac378175adf24290baa", null ]
    ] ],
    [ "lto_codegen_model", "dc/d51/lto_8h.html#gad17a28f0ff971d0c201f4716b25948a4", [
      [ "LTO_CODEGEN_PIC_MODEL_STATIC", "dc/d51/lto_8h.html#ggad17a28f0ff971d0c201f4716b25948a4aea4e17691fe07ad7347aeffcaa53d89f", null ],
      [ "LTO_CODEGEN_PIC_MODEL_DYNAMIC", "dc/d51/lto_8h.html#ggad17a28f0ff971d0c201f4716b25948a4a44307b2e3794d87c9089bd867165b1bf", null ],
      [ "LTO_CODEGEN_PIC_MODEL_DYNAMIC_NO_PIC", "dc/d51/lto_8h.html#ggad17a28f0ff971d0c201f4716b25948a4a0ed08c6a18bf85a247950470e7cf8a9b", null ],
      [ "LTO_CODEGEN_PIC_MODEL_DEFAULT", "dc/d51/lto_8h.html#ggad17a28f0ff971d0c201f4716b25948a4ace82248918011b64c7b538e5ccf01390", null ]
    ] ],
    [ "lto_debug_model", "dc/d51/lto_8h.html#ga45b08530a7582678cb4c03bc70a33bae", [
      [ "LTO_DEBUG_MODEL_NONE", "dc/d51/lto_8h.html#gga45b08530a7582678cb4c03bc70a33baea9c4180379ab2964e5545899510832af6", null ],
      [ "LTO_DEBUG_MODEL_DWARF", "dc/d51/lto_8h.html#gga45b08530a7582678cb4c03bc70a33baea4bd5cb0d20be9e3459e946632969ae3e", null ]
    ] ],
    [ "lto_symbol_attributes", "dc/d51/lto_8h.html#ga913b51e895306793f1c843f1385d6d77", [
      [ "LTO_SYMBOL_ALIGNMENT_MASK", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a3f0fcbf83b631518afdd8edc80717b93", null ],
      [ "LTO_SYMBOL_PERMISSIONS_MASK", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77acd3f554150ceb62bae3350b1b9fa310b", null ],
      [ "LTO_SYMBOL_PERMISSIONS_CODE", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a11dfd51aa9c97237d8db73de3d84034f", null ],
      [ "LTO_SYMBOL_PERMISSIONS_DATA", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a5a606bbd4404adbdcb751f120fd015a7", null ],
      [ "LTO_SYMBOL_PERMISSIONS_RODATA", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a735cac45c02f12464d7c19c2d87ff23e", null ],
      [ "LTO_SYMBOL_DEFINITION_MASK", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77aefda09a3d1d662dc025f62c50e33d05f", null ],
      [ "LTO_SYMBOL_DEFINITION_REGULAR", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a21e2c79cca41650135abe1d08b3eb9b7", null ],
      [ "LTO_SYMBOL_DEFINITION_TENTATIVE", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a50b732265a6adb6f39b72b03563b7a7e", null ],
      [ "LTO_SYMBOL_DEFINITION_WEAK", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77abe0ee6e732b5d7ce91154761564fae34", null ],
      [ "LTO_SYMBOL_DEFINITION_UNDEFINED", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77aae9ae2089893696a5ecc717febce6d97", null ],
      [ "LTO_SYMBOL_DEFINITION_WEAKUNDEF", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77aa432f91fe8ccd278f15424c2ac98c4d1", null ],
      [ "LTO_SYMBOL_SCOPE_MASK", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a83d96085648ff6e51eaf5b24f96b552b", null ],
      [ "LTO_SYMBOL_SCOPE_INTERNAL", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a3b61e709f1be4fd125e9873582719afa", null ],
      [ "LTO_SYMBOL_SCOPE_HIDDEN", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a4343e4b6a05c7b20cf95a18df1aaca4f", null ],
      [ "LTO_SYMBOL_SCOPE_PROTECTED", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a5a9953a5d7974ac03e837c14e5f6f621", null ],
      [ "LTO_SYMBOL_SCOPE_DEFAULT", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a2706fd85b61e391cc355dece4372a346", null ],
      [ "LTO_SYMBOL_SCOPE_DEFAULT_CAN_BE_HIDDEN", "dc/d51/lto_8h.html#gga913b51e895306793f1c843f1385d6d77a0a2feb4eb11540dce84040448c432c17", null ]
    ] ],
    [ "lto_codegen_add_module", "dc/d51/lto_8h.html#gaca40f093d4adbb3dcc24fe7f0056684d", null ],
    [ "lto_codegen_add_must_preserve_symbol", "dc/d51/lto_8h.html#gac2b8b7c3f5322c232e269c93f4377d70", null ],
    [ "lto_codegen_compile", "dc/d51/lto_8h.html#ga56314113cbd4e3701cfa46b633b395de", null ],
    [ "lto_codegen_compile_to_file", "dc/d51/lto_8h.html#gadfde0ad97850e1479009556404f5bc61", null ],
    [ "lto_codegen_create", "dc/d51/lto_8h.html#ga31b1a72b22fc9dcca1ecd28c92e3f89d", null ],
    [ "lto_codegen_debug_options", "dc/d51/lto_8h.html#ga05ff9b7bf60f4b42ce3f54dd10f12d11", null ],
    [ "lto_codegen_dispose", "dc/d51/lto_8h.html#ga226045782babbda624255217e4934dae", null ],
    [ "lto_codegen_set_assembler_args", "dc/d51/lto_8h.html#ga26548a5c0df7b8c3b642637442449b8f", null ],
    [ "lto_codegen_set_assembler_path", "dc/d51/lto_8h.html#gafee8bbe13e5a24fe6f05bf9e34f5365a", null ],
    [ "lto_codegen_set_cpu", "dc/d51/lto_8h.html#gae396c8c812ab4d06c76520234be6ce94", null ],
    [ "lto_codegen_set_debug_model", "dc/d51/lto_8h.html#gad42e2035d7309b212f66dd61c17ffed0", null ],
    [ "lto_codegen_set_diagnostic_handler", "dc/d51/lto_8h.html#ga9f570562a736b80813cba9ae10ace299", null ],
    [ "lto_codegen_set_pic_model", "dc/d51/lto_8h.html#ga77f96a4bf050ec91cca0830107ed815b", null ],
    [ "lto_codegen_write_merged_modules", "dc/d51/lto_8h.html#ga430254fbb8e2da52467fca97173879d8", null ],
    [ "lto_get_error_message", "dc/d51/lto_8h.html#gaa940fb3d6fd9eeba8e4e342eafa96fd6", null ],
    [ "lto_get_version", "dc/d51/lto_8h.html#ga2939b6729798a1698dde72f188857771", null ],
    [ "lto_initialize_disassembler", "dc/d51/lto_8h.html#gac16cae88f84b9eb72f1fbbe31a0f90da", null ],
    [ "lto_module_create", "dc/d51/lto_8h.html#ga2bce26a37f3a58f5966c327e984e13c2", null ],
    [ "lto_module_create_from_fd", "dc/d51/lto_8h.html#ga584067ea7910e54e01147d01a7a9cba3", null ],
    [ "lto_module_create_from_fd_at_offset", "dc/d51/lto_8h.html#gaf414c81bc3bb9b7e890bd4f19ee16a93", null ],
    [ "lto_module_create_from_memory", "dc/d51/lto_8h.html#ga64f951ad0a065f54861970bdf1f8c3fc", null ],
    [ "lto_module_create_from_memory_with_path", "dc/d51/lto_8h.html#ga9e33f0d18f0736afce91d3ed98132384", null ],
    [ "lto_module_dispose", "dc/d51/lto_8h.html#gafea8ec5886536824e8b654a113601917", null ],
    [ "lto_module_get_deplib", "dc/d51/lto_8h.html#ga6d1b64c338f5abaab5a5ba812e6e1772", null ],
    [ "lto_module_get_linkeropt", "dc/d51/lto_8h.html#gaad897ff03f31d5793613db252adb99e2", null ],
    [ "lto_module_get_num_deplibs", "dc/d51/lto_8h.html#ga8eae781e4fc3715545c8fe6b28a40c0e", null ],
    [ "lto_module_get_num_linkeropts", "dc/d51/lto_8h.html#ga8cf62158d1462530aa8e8df3dbbda9cc", null ],
    [ "lto_module_get_num_symbols", "dc/d51/lto_8h.html#ga5a1e077d0ac49bae8a1329a772906998", null ],
    [ "lto_module_get_symbol_attribute", "dc/d51/lto_8h.html#ga91598116ef3f8f7772211ed6a85a91b4", null ],
    [ "lto_module_get_symbol_name", "dc/d51/lto_8h.html#ga583528b6fd0c6f9ac0c72d66bcd9fd57", null ],
    [ "lto_module_get_target_triple", "dc/d51/lto_8h.html#gac621a99216c215bbe9442c106f8f16d5", null ],
    [ "lto_module_is_object_file", "dc/d51/lto_8h.html#gae07005b7262f934bccb0d13e29ea12a0", null ],
    [ "lto_module_is_object_file_for_target", "dc/d51/lto_8h.html#gaae8cb3eaf287d255af45ae7a745dcf5b", null ],
    [ "lto_module_is_object_file_in_memory", "dc/d51/lto_8h.html#gaca136d5490410db13e79001020f711df", null ],
    [ "lto_module_is_object_file_in_memory_for_target", "dc/d51/lto_8h.html#gaa57ab02868d4736b7d5ea5a3c0faacaa", null ],
    [ "lto_module_set_target_triple", "dc/d51/lto_8h.html#ga35e37587fda0ee1e4e90db17956c22f5", null ]
];