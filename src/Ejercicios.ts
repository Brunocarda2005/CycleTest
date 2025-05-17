// Ejercicio 1: Palíndromo (Basico)
// Crear una función esPalindromo que reciba un string y devuelva true si es un palíndromo
// (se lee igual al derecho y al revés), ignorando mayúsculas y espacios.
export function esPalindromo(str: string): boolean {
  return true;
}

// Ejercicio 2: Contar Vocales  (Basico)
// Crear una función contarVocales que cuente el número de vocales
// en un string (sin diferenciar mayúsculas/minúsculas).
export function contarVocales(str: string): number {
  return 0;
}

// Ejercicio 3: Fibonacci (Basico-Medio)
// Implementar una función fibonacci que devuelva el n-ésimo
// número de la secuencia de Fibonacci (sin recursión).
export function fibonacci(n: number): number {
  return 0;
}

// Ejercicio 4: Ordenar Objetos (Basico-Medio)
// Crear una función ordenarPorPropiedad que ordene un array de objetos
// por una propiedad específica (ascendente/descendente).
export function ordenarPorPropiedad<T>(
  arr: T[],
  prop: keyof T,
  orden: "asc" | "desc" = "asc"
): T[] {
  return [];
}

// Ejercicio 5: Validar Paréntesis (Medio)
// Implementar una función validarParentesis que verifique si los paréntesis en un string
// están balanceados (()[]{}).
export function validarParentesis(str: string): boolean {
  return true;
}

// Ejercicio 6: Promesas en Serie (Medio)
// Crear una función ejecutarPromesasEnSerie que ejecute un array de funciones que
// devuelven promesas, una tras otra (no en paralelo).
export async function ejecutarPromesasEnSerie<T>(
  promesas: (() => Promise<T>)[]
): Promise<T[]> {
  return await [];
}

// Ejercicio 7: Deep Equal (Medio-Dificil)
// Implementar una función deepEqual que compare dos valores (objetos, arrays, primitivos)
// de manera recursiva y determine si son estructuralmente iguales
// (mismas propiedades y valores, incluso si están anidados).
export function deepEqual(a: unknown, b: unknown): boolean {
  return true;
}

// Ejercicio 8: Árbol de Directorios (Medio-Dificil)
// Crear una función aplanarDirectorio que convierta un objeto anidado
// (que representa un directorio) en un array de strings con las rutas de los archivos.
export function aplanarDirectorio(
  dir: Record<string, any>,
  prefijo = ""
): string[] {
  return [];
}

// Ejercicio 9: EventEmitter (Dificil)
// Implementar una clase EventEmitter con métodos on, emit, y off
// para manejar eventos personalizados.
type Listener = (...args: any[]) => void;
export class EventEmitter {
  private eventos: Record<string, Listener[]> = {};

  on(evento: string, listener: Listener): void {}

  emit(evento: string, ...args: any[]): void {}

  off(evento: string, listener: Listener): void {}
}

// Ejercicio 10: Diff entre Objetos (Dificil)
// Implementar una función diff que compare dos objetos y devuelva
// las diferencias (valores distintos, propiedades faltantes).
export function diff<T extends object>(obj1: T, obj2: T): Object {
  return {};
}
