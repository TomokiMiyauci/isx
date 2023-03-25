interface RealNumber {
  irrational?: boolean | Irrational;

  rational?: boolean | Rational;
}

interface Irrational {
  pi?: boolean;
}

interface Integer {
  positive?: boolean;

  zero?: boolean;

  negative?: boolean;
}

interface Rational {
  integer?: boolean | Integer;

  decimal?: boolean | Decimal;
}

interface Decimal {
  positive?: boolean;

  negative?: boolean;
}

export function numbers(number: Number): number[] {
  const numberSet = new Set<number>();

  const real: RealNumber = number.real === true
    ? {
      irrational: true,
      rational: true,
    }
    : number.real
    ? number.real
    : {};

  const imaginary = number?.imaginary ? imaginaryNumbers() : [];

  [...realNumbers(real), ...imaginary].forEach((input) => {
    numberSet.add(input);
  });

  return Array.from(numberSet);
}

function realNumbers(realNumber: RealNumber): number[] {
  const numberSet = new Set<number>();

  const rational: Rational = realNumber.rational === true
    ? {
      integer: true,
      decimal: true,
    }
    : realNumber.rational
    ? realNumber.rational
    : {};
  const irrational: Irrational = realNumber.irrational === true
    ? {
      pi: true,
    }
    : realNumber.irrational
    ? realNumber.irrational
    : {};

  [...rationalNumbers(rational), ...irrationalNumbers(irrational)].forEach(
    (input) => {
      numberSet.add(input);
    },
  );

  return Array.from(numberSet);
}

export function rationalNumbers(rational: Rational): number[] {
  const numberSet = new Set<number>();

  const integer: Integer = rational.integer === true
    ? {
      positive: true,
      zero: true,
      negative: true,
    }
    : rational.integer
    ? rational.integer
    : {};

  const decimal: Decimal = rational.decimal === true
    ? {
      positive: true,
      negative: true,
    }
    : rational.decimal
    ? rational.decimal
    : {};

  [...integerNumbers(integer), ...decimalNumbers(decimal)].forEach((input) => {
    numberSet.add(input);
  });

  return Array.from(numberSet);
}

function imaginaryNumbers(): number[] {
  return [Infinity];
}

function irrationalNumbers(irrational: Irrational): number[] {
  const numberSet = new Set<number>();

  if (irrational.pi) {
    numberSet.add(Math.PI);
  }

  return Array.from(numberSet);
}

function decimalNumbers(decimal: Decimal): number[] {
  const numberSet = new Set<number>();

  if (decimal.positive) {
    numberSet.add(0.1);
  }
  if (decimal.negative) {
    numberSet.add(-0.1);
  }

  return Array.from(numberSet);
}

export function integerNumbers(
  { positive, zero, negative }: Integer,
): number[] {
  const numberSet = new Set<number>();

  if (positive) {
    numberSet.add(1);
  }
  if (zero) {
    numberSet.add(0);
  }
  if (negative) {
    numberSet.add(-1);
  }

  return Array.from(numberSet);
}

interface Number {
  real?: boolean | RealNumber;

  imaginary?: boolean;
}
