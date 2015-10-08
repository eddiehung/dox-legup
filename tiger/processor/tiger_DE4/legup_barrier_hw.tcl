# TCL File Generated by Component Editor 11.1sp2
# Tue Jul 16 12:36:56 EDT 2013
# DO NOT MODIFY


# +-----------------------------------
# | 
# | legup_barrier "legup_barrier" v1.0
# | null 2013.07.16.12:36:56
# | 
# | 
# | /home/choijon5/legup/examples/parallel/pthreads/barrier/tiger/legup_barrier.v
# | 
# |    ./legup_barrier.v syn, sim
# | 
# +-----------------------------------

# +-----------------------------------
# | request TCL package from ACDS 11.0
# | 
package require -exact sopc 11.0
# | 
# +-----------------------------------

# +-----------------------------------
# | module legup_barrier
# | 
set_module_property NAME legup_barrier
set_module_property VERSION 1.0
set_module_property INTERNAL false
set_module_property OPAQUE_ADDRESS_MAP true
set_module_property DISPLAY_NAME legup_barrier
set_module_property TOP_LEVEL_HDL_FILE legup_barrier.v
set_module_property TOP_LEVEL_HDL_MODULE legup_barrier
set_module_property INSTANTIATE_IN_SYSTEM_MODULE true
set_module_property EDITABLE true
set_module_property ANALYZE_HDL TRUE
set_module_property STATIC_TOP_LEVEL_MODULE_NAME legup_barrier
set_module_property FIX_110_VIP_PATH false
# | 
# +-----------------------------------

# +-----------------------------------
# | files
# | 
add_file legup_barrier.v {SYNTHESIS SIMULATION}
# | 
# +-----------------------------------

# +-----------------------------------
# | parameters
# | 
# | 
# +-----------------------------------

# +-----------------------------------
# | display items
# | 
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point s1
# | 
add_interface s1 avalon end
set_interface_property s1 addressAlignment DYNAMIC
set_interface_property s1 addressUnits WORDS
set_interface_property s1 associatedClock clockreset
set_interface_property s1 associatedReset clockreset_reset
set_interface_property s1 burstOnBurstBoundariesOnly false
set_interface_property s1 explicitAddressSpan 0
set_interface_property s1 holdTime 0
set_interface_property s1 isMemoryDevice false
set_interface_property s1 isNonVolatileStorage false
set_interface_property s1 linewrapBursts false
set_interface_property s1 maximumPendingReadTransactions 0
set_interface_property s1 printableDevice false
set_interface_property s1 readLatency 0
set_interface_property s1 readWaitTime 1
set_interface_property s1 setupTime 0
set_interface_property s1 timingUnits Cycles
set_interface_property s1 writeWaitTime 0

set_interface_property s1 ENABLED true

add_interface_port s1 avs_s1_address address Input 1
add_interface_port s1 avs_s1_writedata writedata Input 128
add_interface_port s1 avs_s1_read read Input 1
add_interface_port s1 avs_s1_write write Input 1
add_interface_port s1 avs_s1_waitrequest waitrequest Output 1
add_interface_port s1 avs_s1_readdata readdata Output 128
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point clockreset
# | 
add_interface clockreset clock end
set_interface_property clockreset clockRate 0

set_interface_property clockreset ENABLED true

add_interface_port clockreset csi_clockreset_clk clk Input 1
# | 
# +-----------------------------------

# +-----------------------------------
# | connection point clockreset_reset
# | 
add_interface clockreset_reset reset end
set_interface_property clockreset_reset associatedClock clockreset
set_interface_property clockreset_reset synchronousEdges DEASSERT

set_interface_property clockreset_reset ENABLED true

add_interface_port clockreset_reset csi_clockreset_reset_n reset_n Input 1
# | 
# +-----------------------------------
