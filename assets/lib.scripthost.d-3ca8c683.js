const r=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


\r
\r
/////////////////////////////\r
/// Windows Script Host APIS\r
/////////////////////////////\r
\r
\r
interface ActiveXObject {\r
    new (s: string): any;\r
}\r
declare var ActiveXObject: ActiveXObject;\r
\r
interface ITextWriter {\r
    Write(s: string): void;\r
    WriteLine(s: string): void;\r
    Close(): void;\r
}\r
\r
interface TextStreamBase {\r
    /**\r
     * The column number of the current character position in an input stream.\r
     */\r
    Column: number;\r
\r
    /**\r
     * The current line number in an input stream.\r
     */\r
    Line: number;\r
\r
    /**\r
     * Closes a text stream.\r
     * It is not necessary to close standard streams; they close automatically when the process ends. If\r
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.\r
     */\r
    Close(): void;\r
}\r
\r
interface TextStreamWriter extends TextStreamBase {\r
    /**\r
     * Sends a string to an output stream.\r
     */\r
    Write(s: string): void;\r
\r
    /**\r
     * Sends a specified number of blank lines (newline characters) to an output stream.\r
     */\r
    WriteBlankLines(intLines: number): void;\r
\r
    /**\r
     * Sends a string followed by a newline character to an output stream.\r
     */\r
    WriteLine(s: string): void;\r
}\r
\r
interface TextStreamReader extends TextStreamBase {\r
    /**\r
     * Returns a specified number of characters from an input stream, starting at the current pointer position.\r
     * Does not return until the ENTER key is pressed.\r
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\r
     */\r
    Read(characters: number): string;\r
\r
    /**\r
     * Returns all characters from an input stream.\r
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\r
     */\r
    ReadAll(): string;\r
\r
    /**\r
     * Returns an entire line from an input stream.\r
     * Although this method extracts the newline character, it does not add it to the returned string.\r
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\r
     */\r
    ReadLine(): string;\r
\r
    /**\r
     * Skips a specified number of characters when reading from an input text stream.\r
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\r
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)\r
     */\r
    Skip(characters: number): void;\r
\r
    /**\r
     * Skips the next line when reading from an input text stream.\r
     * Can only be used on a stream in reading mode, not writing or appending mode.\r
     */\r
    SkipLine(): void;\r
\r
    /**\r
     * Indicates whether the stream pointer position is at the end of a line.\r
     */\r
    AtEndOfLine: boolean;\r
\r
    /**\r
     * Indicates whether the stream pointer position is at the end of a stream.\r
     */\r
    AtEndOfStream: boolean;\r
}\r
\r
declare var WScript: {\r
    /**\r
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by\r
     * a newline (under CScript.exe).\r
     */\r
    Echo(s: any): void;\r
\r
    /**\r
     * Exposes the write-only error output stream for the current script.\r
     * Can be accessed only while using CScript.exe.\r
     */\r
    StdErr: TextStreamWriter;\r
\r
    /**\r
     * Exposes the write-only output stream for the current script.\r
     * Can be accessed only while using CScript.exe.\r
     */\r
    StdOut: TextStreamWriter;\r
    Arguments: { length: number; Item(n: number): string; };\r
\r
    /**\r
     *  The full path of the currently running script.\r
     */\r
    ScriptFullName: string;\r
\r
    /**\r
     * Forces the script to stop immediately, with an optional exit code.\r
     */\r
    Quit(exitCode?: number): number;\r
\r
    /**\r
     * The Windows Script Host build version number.\r
     */\r
    BuildVersion: number;\r
\r
    /**\r
     * Fully qualified path of the host executable.\r
     */\r
    FullName: string;\r
\r
    /**\r
     * Gets/sets the script mode - interactive(true) or batch(false).\r
     */\r
    Interactive: boolean;\r
\r
    /**\r
     * The name of the host executable (WScript.exe or CScript.exe).\r
     */\r
    Name: string;\r
\r
    /**\r
     * Path of the directory containing the host executable.\r
     */\r
    Path: string;\r
\r
    /**\r
     * The filename of the currently running script.\r
     */\r
    ScriptName: string;\r
\r
    /**\r
     * Exposes the read-only input stream for the current script.\r
     * Can be accessed only while using CScript.exe.\r
     */\r
    StdIn: TextStreamReader;\r
\r
    /**\r
     * Windows Script Host version\r
     */\r
    Version: string;\r
\r
    /**\r
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.\r
     */\r
    ConnectObject(objEventSource: any, strPrefix: string): void;\r
\r
    /**\r
     * Creates a COM object.\r
     * @param strProgiID\r
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.\r
     */\r
    CreateObject(strProgID: string, strPrefix?: string): any;\r
\r
    /**\r
     * Disconnects a COM object from its event sources.\r
     */\r
    DisconnectObject(obj: any): void;\r
\r
    /**\r
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.\r
     * @param strPathname Fully qualified path to the file containing the object persisted to disk.\r
     *                       For objects in memory, pass a zero-length string.\r
     * @param strProgID\r
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.\r
     */\r
    GetObject(strPathname: string, strProgID?: string, strPrefix?: string): any;\r
\r
    /**\r
     * Suspends script execution for a specified length of time, then continues execution.\r
     * @param intTime Interval (in milliseconds) to suspend script execution.\r
     */\r
    Sleep(intTime: number): void;\r
};\r
\r
/**\r
 * WSH is an alias for WScript under Windows Script Host\r
 */\r
declare var WSH: typeof WScript;\r
\r
/**\r
 * Represents an Automation SAFEARRAY\r
 */\r
declare class SafeArray<T = any> {\r
    private constructor();\r
    private SafeArray_typekey: SafeArray<T>;\r
}\r
\r
/**\r
 * Allows enumerating over a COM collection, which may not have indexed item access.\r
 */\r
interface Enumerator<T = any> {\r
    /**\r
     * Returns true if the current item is the last one in the collection, or the collection is empty,\r
     * or the current item is undefined.\r
     */\r
    atEnd(): boolean;\r
\r
    /**\r
     * Returns the current item in the collection\r
     */\r
    item(): T;\r
\r
    /**\r
     * Resets the current item in the collection to the first item. If there are no items in the collection,\r
     * the current item is set to undefined.\r
     */\r
    moveFirst(): void;\r
\r
    /**\r
     * Moves the current item to the next item in the collection. If the enumerator is at the end of\r
     * the collection or the collection is empty, the current item is set to undefined.\r
     */\r
    moveNext(): void;\r
}\r
\r
interface EnumeratorConstructor {\r
    new <T = any>(safearray: SafeArray<T>): Enumerator<T>;\r
    new <T = any>(collection: { Item(index: any): T }): Enumerator<T>;\r
    new <T = any>(collection: any): Enumerator<T>;\r
}\r
\r
declare var Enumerator: EnumeratorConstructor;\r
\r
/**\r
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.\r
 */\r
interface VBArray<T = any> {\r
    /**\r
     * Returns the number of dimensions (1-based).\r
     */\r
    dimensions(): number;\r
\r
    /**\r
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.\r
     */\r
    getItem(dimension1Index: number, ...dimensionNIndexes: number[]): T;\r
\r
    /**\r
     * Returns the smallest available index for a given dimension.\r
     * @param dimension 1-based dimension (defaults to 1)\r
     */\r
    lbound(dimension?: number): number;\r
\r
    /**\r
     * Returns the largest available index for a given dimension.\r
     * @param dimension 1-based dimension (defaults to 1)\r
     */\r
    ubound(dimension?: number): number;\r
\r
    /**\r
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,\r
     * each successive dimension is appended to the end of the array.\r
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]\r
     */\r
    toArray(): T[];\r
}\r
\r
interface VBArrayConstructor {\r
    new <T = any>(safeArray: SafeArray<T>): VBArray<T>;\r
}\r
\r
declare var VBArray: VBArrayConstructor;\r
\r
/**\r
 * Automation date (VT_DATE)\r
 */\r
declare class VarDate {\r
    private constructor();\r
    private VarDate_typekey: VarDate;\r
}\r
\r
interface DateConstructor {\r
    new (vd: VarDate): Date;\r
}\r
\r
interface Date {\r
    getVarDate: () => VarDate;\r
}\r
`;export{r as default};
