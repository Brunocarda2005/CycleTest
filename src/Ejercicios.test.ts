import {
  esPalindromo,
  contarVocales,
  fibonacci,
  ordenarPorPropiedad,
  validarParentesis,
  ejecutarPromesasEnSerie,
  deepEqual,
  aplanarDirectorio,
  EventEmitter,
  diff,
} from './Ejercicios';

// Test Ejercicio 1: Palíndromo
describe('esPalindromo', () => {
  test('devuelve true para palíndromos', () => {
    expect(esPalindromo('Anita lava la tina')).toBe(true);
    expect(esPalindromo('oso')).toBe(true);
  });
  test('devuelve false para no palíndromos', () => {
    expect(esPalindromo('TypeScript')).toBe(false);
  });
});

// Test Ejercicio 2: Contar Vocales
describe('contarVocales', () => {
  test('cuenta las vocales correctamente', () => {
    expect(contarVocales('Hola Mundo')).toBe(4);
    expect(contarVocales('JS')).toBe(0);
  });
});

// Test Ejercicio 3: Fibonacci
describe('fibonacci', () => {
  test('calcula correctamente', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(10)).toBe(55);
  });
});

// Test Ejercicio 4: Ordenar Objetos
describe('ordenarPorPropiedad', () => {
  const usuarios = [{ id: 3 }, { id: 1 }, { id: 2 }];
  test('ordena ascendente', () => {
    expect(ordenarPorPropiedad(usuarios, 'id')).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
});

// Test Ejercicio 5: Validar Paréntesis
describe('validarParentesis', () => {
  test('valida correctamente', () => {
    expect(validarParentesis('()[]{}')).toBe(true);
    expect(validarParentesis('([)]')).toBe(false);
  });
});

// Test Ejercicio 6: Promesas en Serie
describe('ejecutarPromesasEnSerie', () => {
  test('ejecuta en serie', async () => {
    const mockPromises = [
      () => Promise.resolve(1),
      () => new Promise(res => setTimeout(() => res(2), 100)),
    ];
    await expect(ejecutarPromesasEnSerie(mockPromises)).resolves.toEqual([1, 2]);
  });
});

// Test Ejercicio 7: Deep Equal
describe('deepEqual', () => {
  test('compara objetos anidados', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 1 } } };
    const obj3 = { a: { b: { c: 2 } } };
    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
  });
});

// Test Ejercicio 8: Árbol de Directorios
describe('aplanarDirectorio', () => {
  test('aplana correctamente', () => {
    const directorio = {
      src: { 'index.ts': {}, 'utils.ts': {} },
      'package.json': {},
    };
    expect(aplanarDirectorio(directorio)).toEqual([
      'src/index.ts',
      'src/utils.ts',
      'package.json',
    ]);
  });
});

// Test Ejercicio 9: EventEmitter
describe('EventEmitter', () => {
  test('emite eventos', () => {
    const emitter = new EventEmitter();
    const mockListener = jest.fn();
    emitter.on('test', mockListener);
    emitter.emit('test', 123);
    expect(mockListener).toHaveBeenCalledWith(123);
  });
});

// Test Ejercicio 10: Diff entre Objetos
describe('diff', () => {
  test('encuentra diferencias', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3, c: 4 };
    expect(diff(obj1, obj2)).toEqual({ b: 3, c: 4 });
  });
});