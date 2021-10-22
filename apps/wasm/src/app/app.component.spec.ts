import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('binary and hexadecimal values', () => {

    /**
     * There is no binary prefix in JS. The only
     * numeric literals are decimal (no prefix), hex (0x prefix), and octal (0 prefix)
     */

    it('should show how hex conversion works with .toString', () => {
      const hex = 0x2f7;
      const hexToDecimal = (hexVal: number) => hexVal.toString(10);
      const result = hexToDecimal(hex);
      expect(result).toEqual('759');
    });

    it('should show how decimal to binary works with .toString', () => {
      const dec = 2;
      const decimalToBinary = (val: number) => val.toString(2);
      const result = decimalToBinary(dec);
      expect(result).toEqual('10');
    });

    it('should show how binary to decimal works with parseInt', () => {
      const bin = '00000101';
      const binaryToDecimal = (binVal: string) => parseInt(binVal, 2);
      const result = binaryToDecimal(bin);
      expect(result).toEqual(5);
    });

    it('should show the max safe integer is less than max value', () => {
      const maxSafeInt = Number.MAX_SAFE_INTEGER;
      const maxvalue = Number.MAX_VALUE;
      console.log(`MAX_SAFE_INTEGER: ${maxSafeInt}\nMAX_VALUE: ${maxvalue}`);
    });

  });

});

/**
 * Memory
 *
 * L1 cache is fastest way to access data via memory.
 * L2 cache is next fastest.
 * Wasm requires memory allocation and de-allocation.
 *
 * Size and type of data MUST be known for wasm to work properly
 */

/**
 * Numbers
 *
 * Numbers can be signed (positive or negative, represented by leading bit of 1) or unsigned (positive only)
 *
 * Javascript uses 64 bit floating point numbers, not integers
 * The max we can use is (2^53) - 1 due to headers and other information (what other info)?
 * Using the max amount of bits possible helps as it doesn't require extra operations to
 * compute values through binary. Languages like C can use 2^61 - 1
 * which allows them to do large computations faster than JS as the binary values need to be broken up less
 *
 * Wasm can use 64 bit, but all of the exported memory pointers are 32 bit.
 * Using 64 bit inside of wasm works as expected, it's only the pointers that are an issue with size.
 */

/**
 * WASM
 *
 * Works in tandem with JS.
 * Can be cached whereas a web worker cannot be.
 * Runs near native desktop application speed.
 *
 * File types
 * .wasm -> Actual assembly code in binary
 * .wat -> Human readable textual representation. Only for editing/debugging.
 */

/**
 * Modules
 *
 * Written as an S-expression which is tree-based.
 * Names and params prefixed with $
 */

/**
 * Stack and OpCode
 *
 * Wasm is just a stack and only has a stack. There is no heap in wasm.
 *
 */
