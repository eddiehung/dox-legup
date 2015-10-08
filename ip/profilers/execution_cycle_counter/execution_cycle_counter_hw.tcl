# TCL File Generated by University of Toronto's LegUp group
# DO NOT MODIFY

# +-----------------------------------
# | Specify required package(s) 
# | 
package require -exact qsys 13.0
# | 
# +-----------------------------------


# +-----------------------------------
# | module tiger_mips
# | 
set_module_property DESCRIPTION "Execution Cycle Counter"
set_module_property NAME execution_cycle_counter
set_module_property VERSION 1.0
set_module_property INTERNAL false
set_module_property OPAQUE_ADDRESS_MAP true
set_module_property GROUP "LegUp/Profilers"
set_module_property AUTHOR "University of Toronto - LegUp Group"
set_module_property DISPLAY_NAME "Execution Cycle Counter"
set_module_property INSTANTIATE_IN_SYSTEM_MODULE true
set_module_property EDITABLE false
set_module_property ANALYZE_HDL false
set_module_property REPORT_TO_TALKBACK false
set_module_property ALLOW_GREYBOX_GENERATION false
set_module_property VALIDATION_CALLBACK validate
# | 
# +-----------------------------------

# +-----------------------------------
# | file sets
# | 
add_fileset QUARTUS_SYNTH QUARTUS_SYNTH "" ""
set_fileset_property QUARTUS_SYNTH TOP_LEVEL execution_cycle_counter
set_fileset_property QUARTUS_SYNTH ENABLE_RELATIVE_INCLUDE_PATHS false
add_fileset_file execution_cycle_counter.v VERILOG PATH hdl/execution_cycle_counter.v TOP_LEVEL_FILE

add_fileset SIM_VERILOG SIM_VERILOG "" ""
set_fileset_property SIM_VERILOG TOP_LEVEL execution_cycle_counter
set_fileset_property SIM_VERILOG ENABLE_RELATIVE_INCLUDE_PATHS false
add_fileset_file execution_cycle_counter.v VERILOG PATH hdl/execution_cycle_counter.v

add_fileset SIM_VHDL SIM_VHDL "" ""
set_fileset_property SIM_VHDL TOP_LEVEL execution_cycle_counter
set_fileset_property SIM_VHDL ENABLE_RELATIVE_INCLUDE_PATHS false
add_fileset_file execution_cycle_counter.v VERILOG PATH hdl/execution_cycle_counter.v
# | 
# +-----------------------------------

# +-----------------------------------
# | parameters
# | 
add_parameter datawidth INTEGER 32
set_parameter_property datawidth DEFAULT_VALUE 32
set_parameter_property datawidth DISPLAY_NAME "Data Width"
set_parameter_property datawidth GROUP "Avalon Parameters"
set_parameter_property datawidth TYPE INTEGER
set_parameter_property datawidth UNITS None
set_parameter_property datawidth HDL_PARAMETER false
add_parameter addresswidth INTEGER 32
set_parameter_property addresswidth DEFAULT_VALUE 32
set_parameter_property addresswidth DISPLAY_NAME "Address Width"
set_parameter_property addresswidth GROUP "Avalon Parameters"
set_parameter_property addresswidth TYPE INTEGER
set_parameter_property addresswidth UNITS None
set_parameter_property addresswidth HDL_PARAMETER false
add_parameter byteenablewidth INTEGER 4
set_parameter_property byteenablewidth DEFAULT_VALUE 4datawidth
set_parameter_property byteenablewidth DISPLAY_NAME "Byteenable Width"
set_parameter_property byteenablewidth GROUP "Avalon Parameters"
set_parameter_property byteenablewidth TYPE INTEGER
set_parameter_property byteenablewidth UNITS None
set_parameter_property byteenablewidth HDL_PARAMETER false

add_parameter DW INTEGER 31
set_parameter_property DW DEFAULT_VALUE 31
set_parameter_property DW DISPLAY_NAME "Data Width"
set_parameter_property DW GROUP "Avalon Parameters"
set_parameter_property DW TYPE INTEGER
set_parameter_property DW UNITS None
set_parameter_property DW HDL_PARAMETER true
set_parameter_property DW VISIBLE false
set_parameter_property DW DERIVED true
add_parameter AW INTEGER 31
set_parameter_property AW DEFAULT_VALUE 31
set_parameter_property AW DISPLAY_NAME "Address Width"
set_parameter_property AW GROUP "Avalon Parameters"
set_parameter_property AW TYPE INTEGER
set_parameter_property AW UNITS None
set_parameter_property AW HDL_PARAMETER true
set_parameter_property AW VISIBLE false
set_parameter_property AW DERIVED true
add_parameter BE INTEGER 3
set_parameter_property BE DEFAULT_VALUE 3
set_parameter_property BE DISPLAY_NAME "Byteenable Width"
set_parameter_property BE GROUP "Avalon Parameters"
set_parameter_property BE TYPE INTEGER
set_parameter_property BE UNITS None
set_parameter_property BE HDL_PARAMETER true
set_parameter_property BE VISIBLE false
set_parameter_property BE DERIVED true

add_parameter START_ADDRESS STD_LOGIC_VECTOR 8388640
set_parameter_property START_ADDRESS DEFAULT_VALUE 8388640
set_parameter_property START_ADDRESS DISPLAY_NAME "Counter Start Address"
set_parameter_property START_ADDRESS DISPLAY_HINT hexadecimal
set_parameter_property START_ADDRESS GROUP "Counter Control Settings"
set_parameter_property START_ADDRESS TYPE STD_LOGIC_VECTOR
set_parameter_property START_ADDRESS UNITS None
set_parameter_property START_ADDRESS ALLOWED_RANGES 0:17179869183
set_parameter_property START_ADDRESS HDL_PARAMETER true
add_parameter END_ADDRESS STD_LOGIC_VECTOR 16
set_parameter_property END_ADDRESS DEFAULT_VALUE 16
set_parameter_property END_ADDRESS DISPLAY_NAME "Counter End Address"
set_parameter_property END_ADDRESS DISPLAY_HINT hexadecimal
set_parameter_property END_ADDRESS GROUP "Counter Control Settings"
set_parameter_property END_ADDRESS TYPE STD_LOGIC_VECTOR
set_parameter_property END_ADDRESS UNITS None
set_parameter_property END_ADDRESS ALLOWED_RANGES 0:17179869183
set_parameter_property END_ADDRESS HDL_PARAMETER true
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point clock
# | 
add_interface clock clock end
set_interface_property clock clockRate 0
set_interface_property clock ENABLED true
set_interface_property clock EXPORT_OF ""
set_interface_property clock PORT_NAME_MAP ""
set_interface_property clock SVD_ADDRESS_GROUP ""

add_interface_port clock clk clk Input 1
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point reset
# | 
add_interface reset reset end
set_interface_property reset associatedClock clock
set_interface_property reset synchronousEdges DEASSERT
set_interface_property reset ENABLED true
set_interface_property reset EXPORT_OF ""
set_interface_property reset PORT_NAME_MAP ""
set_interface_property reset SVD_ADDRESS_GROUP ""

add_interface_port reset reset reset Input 1
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point slave
# | 
add_interface slave avalon end
set_interface_property slave addressUnits SYMBOLS
set_interface_property slave associatedClock clock
set_interface_property slave associatedReset reset
set_interface_property slave bitsPerSymbol 8
set_interface_property slave burstOnBurstBoundariesOnly false
set_interface_property slave burstcountUnits WORDS
set_interface_property slave explicitAddressSpan 0
set_interface_property slave holdTime 0
set_interface_property slave linewrapBursts false
set_interface_property slave maximumPendingReadTransactions 8
set_interface_property slave readLatency 0
set_interface_property slave readWaitTime 1
set_interface_property slave setupTime 0
set_interface_property slave timingUnits Cycles
set_interface_property slave writeWaitTime 0
set_interface_property slave ENABLED true
set_interface_property slave EXPORT_OF ""
set_interface_property slave PORT_NAME_MAP ""
set_interface_property slave SVD_ADDRESS_GROUP ""

add_interface_port slave avs_slave_address address Input "(AW) - (0) + 1"
add_interface_port slave avs_slave_byteenable byteenable Input "(BE) - (0) + 1"
add_interface_port slave avs_slave_lock lock Input 1
add_interface_port slave avs_slave_read read Input 1
add_interface_port slave avs_slave_write write Input 1
add_interface_port slave avs_slave_writedata writedata Input "(DW) - (0) + 1"
add_interface_port slave avs_slave_readdata readdata Output "(DW) - (0) + 1"
add_interface_port slave avs_slave_readdatavalid readdatavalid Output 1
add_interface_port slave avs_slave_waitrequest waitrequest Output 1
set_interface_assignment slave embeddedsw.configuration.isFlash 0
set_interface_assignment slave embeddedsw.configuration.isMemoryDevice 0
set_interface_assignment slave embeddedsw.configuration.isNonVolatileStorage 0
set_interface_assignment slave embeddedsw.configuration.isPrintableDevice 0
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point master
# | 
add_interface master avalon start
set_interface_property master addressUnits SYMBOLS
set_interface_property master associatedClock clock
set_interface_property master associatedReset reset
set_interface_property master bitsPerSymbol 8
set_interface_property master burstOnBurstBoundariesOnly false
set_interface_property master burstcountUnits WORDS
set_interface_property master doStreamReads false
set_interface_property master doStreamWrites false
set_interface_property master holdTime 0
set_interface_property master linewrapBursts false
set_interface_property master maximumPendingReadTransactions 0
set_interface_property master readLatency 0
set_interface_property master readWaitTime 1
set_interface_property master setupTime 0
set_interface_property master timingUnits Cycles
set_interface_property master writeWaitTime 0
set_interface_property master ENABLED true
set_interface_property master EXPORT_OF ""
set_interface_property master PORT_NAME_MAP ""
set_interface_property master SVD_ADDRESS_GROUP ""

add_interface_port master avm_master_readdata readdata Input "(DW) - (0) + 1"
add_interface_port master avm_master_readdatavalid readdatavalid Input 1
add_interface_port master avm_master_waitrequest waitrequest Input 1
add_interface_port master avm_master_address address Output 32
add_interface_port master avm_master_byteenable byteenable Output "(BE) - (0) + 1"
add_interface_port master avm_master_lock lock Output 1
add_interface_port master avm_master_read read Output 1
add_interface_port master avm_master_write write Output 1
add_interface_port master avm_master_writedata writedata Output "(DW) - (0) + 1"
# | 
# +-----------------------------------

# +-----------------------------------
# | Validation function
# | 
proc validate {} {
	set datawidth			[ get_parameter_value "datawidth" ]
	set addresswidth		[ get_parameter_value "addresswidth" ]
	set byteenablewidth	[ get_parameter_value "byteenablewidth" ]
	
	set_parameter_value DW [ expr $datawidth - 1 ]
	set_parameter_value AW [ expr $addresswidth - 1 ]
	set_parameter_value BE [ expr $byteenablewidth - 1 ]
}
# | 
# +-----------------------------------