# This file defines the parameters of the system for use by LegUp
# Parameters are defined in <legup_root>/llvm/lib/Target/Verilog/LegupConfig.cpp


# Processor Settings
set_parameter SYSTEM_PROCESSOR_ARCHITECTURE MIPSI
set_parameter SYSTEM_PROCESSOR_NAME         Tiger_MIPS
set_parameter SYSTEM_PROCESSOR_DATA_MASTER  data_master

# Clock Settings
set_parameter SYSTEM_CLOCK_MODULE clk
set_parameter SYSTEM_CLOCK_INTERFACE clk

# Reset Settings
set_parameter SYSTEM_RESET_MODULE clk
set_parameter SYSTEM_RESET_INTERFACE clk_reset

# Memory Slave Settings
set_parameter SYSTEM_MEMORY_MODULE      DCache
set_parameter SYSTEM_MEMORY_INTERFACE   cache_slave

# Cache Settings
set_parameter SYSTEM_DATA_CACHE_TYPE legup_dm_wt_cache

# Memory Settings
set_parameter SYSTEM_MEMORY_BASE_ADDRESS        0x40000000
set_parameter SYSTEM_MEMORY_SIZE                0x00800000
set_parameter SYSTEM_MEMORY_WIDTH               2
set_parameter SYSTEM_MEMORY_SIM_INIT_FILE_TYPE  DAT
set_parameter SYSTEM_MEMORY_SIM_INIT_FILE_NAME  altera_sdram_partner_module.dat

# Parallel Core Settings
#set_parameter SYSTEM_BARRIER_BASE_ADDRESS   0x00800000
#set_parameter SYSTEM_MUTEX_BASE_ADDRESS     0x00800000


