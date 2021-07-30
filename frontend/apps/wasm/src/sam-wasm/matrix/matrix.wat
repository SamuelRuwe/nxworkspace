(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func (param i32 i32 i32)))
  (type (;2;) (func))
  (type (;3;) (func (param i32 f32 i32)))
  (type (;4;) (func (param i32)))
  (type (;5;) (func (param i32) (result i32)))
  (func (;0;) (type 2)
    nop)
  (func (;1;) (type 3) (param i32 f32 i32)
    local.get 2
    i32.const 2
    i32.shl
    local.tee 2
    i32.const 1024
    i32.add
    local.get 0
    i32.const 2
    i32.shl
    local.tee 0
    i32.const 1024
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1028
    i32.add
    local.get 0
    i32.const 1028
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1032
    i32.add
    local.get 0
    i32.const 1032
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1036
    i32.add
    local.get 0
    i32.const 1036
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1040
    i32.add
    local.get 0
    i32.const 1040
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1044
    i32.add
    local.get 0
    i32.const 1044
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1048
    i32.add
    local.get 0
    i32.const 1048
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1052
    i32.add
    local.get 0
    i32.const 1052
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1056
    i32.add
    local.get 0
    i32.const 1056
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1060
    i32.add
    local.get 0
    i32.const 1060
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1064
    i32.add
    local.get 0
    i32.const 1064
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1068
    i32.add
    local.get 0
    i32.const 1068
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1072
    i32.add
    local.get 0
    i32.const 1072
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1076
    i32.add
    local.get 0
    i32.const 1076
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1080
    i32.add
    local.get 0
    i32.const 1080
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    local.get 2
    i32.const 1084
    i32.add
    local.get 0
    i32.const 1084
    i32.add
    f32.load
    local.get 1
    f32.mul
    f32.store
    i32.const 2048
    i32.const 16
    i32.store)
  (func (;2;) (type 1) (param i32 i32 i32)
    (local f32 f32 f32 i32 i32 i32 i32 i32)
    local.get 2
    i32.const 2
    i32.shl
    local.tee 6
    i32.const 1024
    i32.add
    local.tee 2
    i32.const 0
    i32.store
    local.get 2
    local.get 0
    i32.const 2
    i32.shl
    local.tee 0
    i32.const 1024
    i32.add
    f32.load
    local.get 1
    i32.const 2
    i32.shl
    local.tee 1
    i32.const 1024
    i32.add
    local.tee 7
    f32.load
    f32.mul
    f32.const 0x0p+0 (;=0;)
    f32.add
    local.tee 3
    f32.store
    local.get 2
    local.get 3
    local.get 0
    i32.const 1028
    i32.add
    f32.load
    local.get 1
    i32.const 1028
    i32.add
    local.tee 8
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 2
    local.get 3
    local.get 0
    i32.const 1032
    i32.add
    f32.load
    local.get 1
    i32.const 1032
    i32.add
    local.tee 9
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 1
    i32.const 1036
    i32.add
    local.tee 10
    f32.load
    local.set 4
    local.get 0
    i32.const 1036
    i32.add
    f32.load
    local.set 5
    local.get 6
    i32.const 1028
    i32.add
    local.tee 1
    i32.const 0
    i32.store
    local.get 2
    local.get 3
    local.get 5
    local.get 4
    f32.mul
    f32.add
    f32.store
    local.get 1
    local.get 0
    i32.const 1040
    i32.add
    f32.load
    local.get 7
    f32.load
    f32.mul
    f32.const 0x0p+0 (;=0;)
    f32.add
    local.tee 3
    f32.store
    local.get 1
    local.get 3
    local.get 0
    i32.const 1044
    i32.add
    f32.load
    local.get 8
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 1
    local.get 3
    local.get 0
    i32.const 1048
    i32.add
    f32.load
    local.get 9
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 10
    f32.load
    local.set 4
    local.get 0
    i32.const 1052
    i32.add
    f32.load
    local.set 5
    local.get 6
    i32.const 1032
    i32.add
    local.tee 2
    i32.const 0
    i32.store
    local.get 1
    local.get 3
    local.get 5
    local.get 4
    f32.mul
    f32.add
    f32.store
    local.get 2
    local.get 0
    i32.const 1056
    i32.add
    f32.load
    local.get 7
    f32.load
    f32.mul
    f32.const 0x0p+0 (;=0;)
    f32.add
    local.tee 3
    f32.store
    local.get 2
    local.get 3
    local.get 0
    i32.const 1060
    i32.add
    f32.load
    local.get 8
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 2
    local.get 3
    local.get 0
    i32.const 1064
    i32.add
    f32.load
    local.get 9
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 10
    f32.load
    local.set 4
    local.get 0
    i32.const 1068
    i32.add
    f32.load
    local.set 5
    local.get 6
    i32.const 1036
    i32.add
    local.tee 1
    i32.const 0
    i32.store
    local.get 2
    local.get 3
    local.get 5
    local.get 4
    f32.mul
    f32.add
    f32.store
    local.get 1
    local.get 0
    i32.const 1072
    i32.add
    f32.load
    local.get 7
    f32.load
    f32.mul
    f32.const 0x0p+0 (;=0;)
    f32.add
    local.tee 3
    f32.store
    local.get 1
    local.get 3
    local.get 0
    i32.const 1076
    i32.add
    f32.load
    local.get 8
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 1
    local.get 3
    local.get 0
    i32.const 1080
    i32.add
    f32.load
    local.get 9
    f32.load
    f32.mul
    f32.add
    local.tee 3
    f32.store
    local.get 1
    local.get 3
    local.get 0
    i32.const 1084
    i32.add
    f32.load
    local.get 10
    f32.load
    f32.mul
    f32.add
    f32.store
    i32.const 2052
    i32.const 4
    i32.store
    i32.const 2048
    i32.const 4
    i32.store)
  (func (;3;) (type 1) (param i32 i32 i32)
    (local f32 i32 i32 i32 i32 i32 i32 i32 i32)
    local.get 2
    i32.const 2
    i32.shl
    i32.const 1024
    i32.add
    local.set 6
    local.get 1
    i32.const 2
    i32.shl
    i32.const 1024
    i32.add
    local.set 4
    local.get 0
    i32.const 2
    i32.shl
    i32.const 1024
    i32.add
    local.set 7
    loop  ;; label = @1
      local.get 6
      local.get 8
      i32.const 4
      i32.shl
      local.tee 5
      i32.add
      local.tee 0
      i32.const 0
      i32.store
      local.get 0
      local.get 5
      local.get 7
      i32.add
      local.tee 9
      f32.load
      local.get 4
      f32.load
      f32.mul
      f32.const 0x0p+0 (;=0;)
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 7
      local.get 5
      i32.const 4
      i32.or
      local.tee 2
      i32.add
      local.tee 10
      f32.load
      local.get 4
      f32.load offset=16
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 7
      local.get 5
      i32.const 8
      i32.or
      local.tee 1
      i32.add
      local.tee 11
      f32.load
      local.get 4
      f32.load offset=32
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 7
      local.get 5
      i32.const 12
      i32.or
      local.tee 0
      i32.add
      local.tee 5
      f32.load
      local.get 4
      f32.load offset=48
      f32.mul
      f32.add
      f32.store
      local.get 2
      local.get 6
      i32.add
      local.tee 2
      i32.const 0
      i32.store
      local.get 2
      local.get 9
      f32.load
      local.get 4
      f32.load offset=4
      f32.mul
      f32.const 0x0p+0 (;=0;)
      f32.add
      local.tee 3
      f32.store
      local.get 2
      local.get 3
      local.get 10
      f32.load
      local.get 4
      f32.load offset=20
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 2
      local.get 3
      local.get 11
      f32.load
      local.get 4
      f32.load offset=36
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 2
      local.get 3
      local.get 5
      f32.load
      local.get 4
      f32.load offset=52
      f32.mul
      f32.add
      f32.store
      local.get 1
      local.get 6
      i32.add
      local.tee 1
      i32.const 0
      i32.store
      local.get 1
      local.get 9
      f32.load
      local.get 4
      f32.load offset=8
      f32.mul
      f32.const 0x0p+0 (;=0;)
      f32.add
      local.tee 3
      f32.store
      local.get 1
      local.get 3
      local.get 10
      f32.load
      local.get 4
      f32.load offset=24
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 1
      local.get 3
      local.get 11
      f32.load
      local.get 4
      f32.load offset=40
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 1
      local.get 3
      local.get 5
      f32.load
      local.get 4
      f32.load offset=56
      f32.mul
      f32.add
      f32.store
      local.get 0
      local.get 6
      i32.add
      local.tee 0
      i32.const 0
      i32.store
      local.get 0
      local.get 9
      f32.load
      local.get 4
      f32.load offset=12
      f32.mul
      f32.const 0x0p+0 (;=0;)
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 10
      f32.load
      local.get 4
      f32.load offset=28
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 11
      f32.load
      local.get 4
      f32.load offset=44
      f32.mul
      f32.add
      local.tee 3
      f32.store
      local.get 0
      local.get 3
      local.get 5
      f32.load
      local.get 4
      f32.load offset=60
      f32.mul
      f32.add
      f32.store
      local.get 8
      i32.const 1
      i32.add
      local.tee 8
      i32.const 4
      i32.ne
      br_if 0 (;@1;)
    end
    i32.const 2052
    i32.const 4
    i32.store
    i32.const 2048
    i32.const 4
    i32.store
    i32.const 2056
    i32.const 4
    i32.store)
  (func (;4;) (type 0) (result i32)
    i32.const 1024)
  (func (;5;) (type 0) (result i32)
    global.get 0)
  (func (;6;) (type 4) (param i32)
    local.get 0
    global.set 0)
  (func (;7;) (type 5) (param i32) (result i32)
    global.get 0
    local.get 0
    i32.sub
    i32.const -16
    i32.and
    local.tee 0
    global.set 0
    local.get 0)
  (func (;8;) (type 0) (result i32)
    i32.const 2060)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 256 256)
  (global (;0;) (mut i32) (i32.const 5244944))
  (export "memory" (memory 0))
  (export "scalarMult" (func 1))
  (export "vectorMult" (func 2))
  (export "matrixMult" (func 3))
  (export "getOffset" (func 4))
  (export "_initialize" (func 0))
  (export "__indirect_function_table" (table 0))
  (export "__errno_location" (func 8))
  (export "stackSave" (func 5))
  (export "stackRestore" (func 6))
  (export "stackAlloc" (func 7))
  (elem (;0;) (i32.const 1) func 0))
