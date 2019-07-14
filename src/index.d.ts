
type List<T> = ArrayLike<T>;
type NotVoid = unknown;
type PropertyName = string | number | symbol;
type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends object ? object : T[P]
};
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T>;
type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>;
type ValueKeyIteratee<T> = ((value: T, key: string) => NotVoid) | IterateeShorthand<T>;
type ValueKeyIterateeTypeGuard<T, S extends T> = (value: T, key: string) => value is S;
type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;
interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface Dictionary<T> {
  [index: string]: T;
}
interface NumericDictionary<T> {
  [index: number]: T;
}

type Many<T> = T | ReadonlyArray<T>;
type PropertyPath = Many<PropertyName>;
type GlobalPartial<T> = Partial<T>;
type PartialObject<T> = GlobalPartial<T>;

/**
 * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
 * final chunk will be the remaining elements.
 *
 * @param array The array to process.
 * @param size The length of each chunk.
 * @return Returns the new array containing chunks.
 */
export declare function chunk<T>(array: List<T> | null | undefined, size?: number): T[][];

/**
 * Flattens `array` a single level deep.
 *
 * @param array The array to flatten.
 * @return Returns the new flattened array.
 */
export declare function flatten<T>(array: List<Many<T>> | null | undefined): T[];

/**
 * Recursively flattens a nested array.
 *
 * @param array The array to recursively flatten.
 * @return Returns the new flattened array.
 */
export declare function flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept.
 *
 * @category Array
 * @param array The array to inspect.
 * @returns Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
export declare function uniq<T>(array: List<T> | null | undefined): T[];

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The iteratee is invoked with one argument: (value).
 *
 * @category Array
 * @param array The array to inspect.
 * @param [iteratee=_.identity] The iteratee invoked per element.
 * @returns Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // using the `_.property` iteratee shorthand
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
export declare function uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];

/**
 * Creates an object composed of keys generated from the results of running each element of collection through
 * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @param collection The collection to iterate over.
 * @param iteratee The function invoked per iteration.
 * @return Returns the composed aggregate object.
 */
export declare function groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>;

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @category Collection
 * @param collection The collection to iterate over.
 * @param [iteratees=[_.identity]] The iteratees to sort by.
 * @param [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
 * @returns Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 42 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // sort by `user` in ascending order and by `age` in descending order
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
 */
export declare function orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): T[];

/**
 * Produces a random number between min and max (inclusive). If only one argument is provided a number between
 * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
 * number is returned instead of an integer.
 *
 * @param min The minimum possible value.
 * @param max The maximum possible value.
 * @param floating Specify returning a floating-point number.
 * @return Returns the random number.
 */
export declare function random(floating?: boolean): number;
/**
 * @see _.random
 */
export declare function random(max: number, floating?: boolean): number;
/**
 * @see _.random
 */
export declare function random(min: number, max: number, floating?: boolean): number;
/**
 * @see _.random
 */
export declare function random(min: number, index: string | number, guard: object): number;

/**
 * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
 * in its place.
 *
 * @param object The object to query.
 * @param path The path of the property to get.
 * @param defaultValue The value returned if the resolved value is undefined.
 * @return Returns the resolved value.
 */
export declare function get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey extends keyof TObject>(object: TObject | null | undefined, path: TKey | [TKey]): TObject[TKey] | undefined;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject | null | undefined, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2];
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject | null | undefined, path: [TKey1, TKey2]): TObject[TKey1][TKey2] | undefined;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2], undefined> | TDefault;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3];
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3] | undefined;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2][TKey3], undefined> | TDefault;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4];
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4] | undefined;
/**
 * @see _.get
 */
export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault;
/**
 * @see _.get
 */
export declare function get<T>(object: NumericDictionary<T>, path: number): T;
/**
 * @see _.get
 */
export declare function get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined;
/**
 * @see _.get
 */
export declare function get<T, TDefault>(object: NumericDictionary<T> | null | undefined, path: number, defaultValue: TDefault): T | TDefault;
/**
 * @see _.get
 */
export declare function get<TDefault>(object: null | undefined, path: PropertyPath, defaultValue: TDefault): TDefault;
/**
 * @see _.get
 */
export declare function get(object: null | undefined, path: PropertyPath): undefined;
/**
 * @see _.get
 */
export declare function get(object: any, path: PropertyPath, defaultValue?: any): any;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @category Object
 * @param object The object to query.
 * @param path The path to check.
 * @returns Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': { 'c': 3 } } };
 * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b.c');
 * // => true
 *
 * _.has(object, ['a', 'b', 'c']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
export declare function has<T>(object: T, path: PropertyPath): boolean;

/**
 * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
 * missing index properties while objects are created for all other missing properties. Use _.setWith to
 * customize path creation.
 *
 * @param object The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @return Returns object.
 */
export declare function set<T extends object>(object: T, path: PropertyPath, value: any): T;
/**
 * @see _.set
 */
export declare function set<TResult>(object: object, path: PropertyPath, value: any): TResult;

/**
 * Removes the property at path of object.
 *
 * Note: This method mutates object.
 *
 * @param object The object to modify.
 * @param path The path of the property to unset.
 * @return Returns true if the property is deleted, else false.
 */
export declare function unset(object: any, path: PropertyPath): boolean;

/**
 * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
 * subsequent values overwrite property assignments of previous values unless multiValue is true.
 *
 * @param object The object to invert.
 * @param multiValue Allow multiple values per key.
 * @return Returns the new inverted object.
 */
export declare function invert(object: object): Dictionary<string>;

/**
 * Recursively merges own and inherited enumerable properties of source
 * objects into the destination object, skipping source properties that resolve
 * to `undefined`. Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment. Source objects
 * are applied from left to right. Subsequent sources overwrite property
 * assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @category Object
 * @param object The destination object.
 * @param [sources] The source objects.
 * @returns Returns `object`.
 * @example
 *
 * var users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * var ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * _.merge(users, ages);
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 */
export declare function merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
/**
 * @see _.merge
 */
export declare function merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
/**
 * @see _.merge
 */
export declare function merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
/**
 * @see _.merge
 */
export declare function merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
/**
 * @see _.merge
 */
export declare function merge(object: any, ...otherArgs: any[]): any;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that are not omitted.
 *
 * @category Object
 * @param object The source object.
 * @param [paths] The property names to omit, specified
 *  individually or in arrays..
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
export declare function omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
/**
 * @see _.omit
 */
export declare function omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;

/**
 * The opposite of `_.pickBy`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that `predicate`
 * doesn't return truthy for.
 *
 * @category Object
 * @param object The source object.
 * @param [predicate=_.identity] The function invoked per property.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
export declare function omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
/**
 * @see _.omitBy
 */
export declare function omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
/**
 * @see _.omitBy
 */
export declare function omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @category Object
 * @param object The source object.
 * @param [props] The property names to pick, specified
 *  individually or in arrays.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
export declare function pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
/**
 * @see _.pick
 */
export declare function pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialObject<T>;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @category Object
 * @param object The source object.
 * @param [predicate=_.identity] The function invoked per property.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
export declare function pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
/**
 * @see _.pickBy
 */
export declare function pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
/**
 * @see _.pickBy
 */
export declare function pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
/**
 * @see _.pickBy
 */
export declare function pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
/**
 * @see _.pickBy
 */
export declare function pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;

/**
 * Converts the first character of string to upper case and the remaining to lower case.
 *
 * @param string The string to capitalize.
 * @return Returns the capitalized string.
 */
export declare function capitalize(string?: string): string;

/**
 * Converts the first character of `string` to upper case.
 *
 * @param string The string to convert.
 * @return Returns the converted string.
 */
export declare function upperFirst(string?: string): string;

/**
 * Converts string to start case.
 *
 * @param string The string to convert.
 * @return Returns the start cased string.
 */
export declare function startCase(string?: string): string;

/**
 * Splits string by separator.
 *
 * Note: This method is based on String#split.
 *
 * @param string The string to trim.
 * @param separator The separator pattern to split by.
 * @param limit The length to truncate results to.
 * @return Returns the new array of string segments.
 */
export declare function split(string: string, separator?: RegExp | string, limit?: number): string[];
/**
 * @see _.split
 */
export declare function split(string: string, index: string | number, guard: object): string[];

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
 * range is created unless a negative step is specified.
 *
 * @param start The start of the range.
 * @param end The end of the range.
 * @param step The value to increment or decrement by.
 * @return Returns a new range array.
 */
export declare function range(
  start: number,
  end?: number,
  step?: number
): number[];

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
 * range is created unless a negative step is specified.
 *
 * @param start The start of the range.
 * @param index Not used in this overload.
 * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
 * @return Returns a new range array.
 */
export declare function range(
  end: number,
  index: string | number,
  guard: object
): number[];

/**
 * Converts `value` to a property path array.
 *
 * @category Util
 * @param value The value to convert.
 * @returns Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 *
 * var path = ['a', 'b', 'c'],
 *     newPath = _.toPath(path);
 *
 * console.log(newPath);
 * // => ['a', 'b', 'c']
 *
 * console.log(path === newPath);
 * // => false
 */
export declare function toPath(value: any): string[];
