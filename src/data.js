/**
 * @type {Invoice[]}
 */
import MorningPrayers from '../src/components/MorningPrayers';
import EveningPrayers from '../src/components/EveningPrayers';
import Otrok from '../src/components/Otrok';
import Bogorodice from '../src/components/Bogorodice';

let invoices = [
	{
		name: "Утренние молитвы",
		number: 1995,
		amount: "$10,800",
		due: "12/05/1995",
		content: MorningPrayers()
	},
	{
		name: "Вечерние молитвы",
		number: 2000,
		amount: "$8,000",
		due: "10/31/2000",
		content: EveningPrayers()
	},
	{
		name: "Акафист отроку Вячеславу",
		number: 2003,
		amount: "$9,500",
		due: "07/22/2003",
		content: Otrok()
	},
	{
		name: "Богородичное правило",
		number: 1997,
		amount: "$14,000",
		due: "09/01/1997",
		content: Bogorodice()
	},
	{
		name: "Правило схимонахини Антонии",
		number: 1998,
		amount: "$4,600",
		due: "01/27/2998",
		content: 2
	}
];

export function getInvoices() {
	return invoices;
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getInvoice(number) {
	return invoices.find(invoice => invoice.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteInvoice(number) {
	invoices = invoices.filter(invoice => invoice.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */
