(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.unindentor = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = unindentor();

function unindentor() {
    'use strict';

    function unindentElementList(elementList) {
        elementList = formatElementList(elementList);
        for (var i = 0; i < elementList.length; i++) {
            unindentElement(elementList[i]);
        }
    }

    function formatElementList(elementList) {
        if (typeof elementList == 'string') {
            elementList = document.querySelectorAll(elementList);
        }
        elementList = Array.prototype.slice.call(elementList);
        return elementList;
    }

    function unindentElement(element) {
        element.innerHTML = unindentText(element.innerHTML);
    }

    function unindentText(text) {
        var result = [];
        var indentation = false;
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (indentation === false) {
                indentation = findIndentation(line);
                if (indentation === false) {
                    continue;
                }
            }
            line = unindentLine(line, indentation);
            result.push(line);
        }
        return rtrim(result.join('\n'));
    }

    function unindentLine(line, indentation) {
        if (startsWith(line, indentation)) {
            line = line.substr(indentation.length);
        }
        return line;
    }

    function findIndentation(line) {
        var trimmed = line.trim();
        if (!trimmed) {
            return false;
        }
        return line.substr(0, line.indexOf(trimmed[0]));
    }

    function startsWith(str, prefix) {
        return str.slice(0, prefix.length) == prefix;
    }

    function rtrim(str) {
        return str.replace(/\s+$/, '');
    }

    return {
        unindentElementList: unindentElementList,
        unindentElement: unindentElement,
        unindentText: unindentText
    }
};
},{}]},{},[1])(1)
});