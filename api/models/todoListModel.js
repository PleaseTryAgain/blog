'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name:{
		type: String,
		Required: 'Kindly enter the name of the task'
	},
	Creat_date:{
		type: Date,
		default: Date.now
	},
	status:{
		type:[{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default:['pending']
	}
});

module.export = mongoose.model('Tasks', TaskSchema)