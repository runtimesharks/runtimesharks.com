//
//  Dictionary.swift
//  App
//
//  Created by Roland Leth on 28.10.2017.
//

/// Iterates through all of right hand operator's keys and values, adds (*overwrites*) them to the left hand operator, and returns a new dictionary.
func +<K, V>(left: [K: V], right: [K: V]) -> [K: V] {
	var l = left
	
	right.forEach { l[$0] = $1 }
	
	return l
}

/// Iterates through all of right hand operator's keys and values, and adds (*overwrites*) them to the left hand operator.
func +=<K, V>(left: inout [K: V], right: [K: V]) {
	left = left + right
}
