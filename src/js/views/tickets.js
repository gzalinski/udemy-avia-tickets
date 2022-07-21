import CurrencyUI from './currency'
class TicketsUI{
    constructor(currency){
        this.container = document.querySelector('.tickets-loop')
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency)
    }

    renderTickets(tickets){
        this.clearContainer();

        if(!tickets.length){
            this.showEmptyMsg();
            return;
        }

        let fragment = ''
        const currency = this.getCurrencySymbol();

        tickets.forEach(ticket => {
            const template = TicketsUI.ticketTemplate(ticket, currency)
            fragment += template;
        });

        this.container.insertAdjacentHTML('afterbegin', fragment)
    }

    clearContainer(){
        this.container.innerHTML = ''
    }

    showEmptyMsg(){
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML(template)
    }

    static emptyMsgTemplate(){
        return `<div class="tickets-empty-res-msg box">
                По вашему запросу билетов не найдено.
                </div>`
    }

    static ticketTemplate(ticket, currency){
       const template = `
       <div class="ticket box">
            <div class="ticket-inner">
                <div class="ticket-info">
                    <div class="ticket-origin d-flex">
                        <div class="ticket-location">${ticket.origin_name}</div>
                        <div class="ticket-datetime"> ${ticket.departure_at}</div>
                    </div>

                    <div class="ticket-infokey d-flex align-items-center">
                        <div class="ticket-airline-img tooltipped" data-position="top" data-tooltip="${ticket.airline_name}">
                            <img src="${ticket.airline_logo}" alt="" >
                        </div>

                        <div class="ticket-badges">
                            <span class="new badge" data-badge-caption="Номер рейса">${ticket.flight_number}</span>
                            <span class="ticket-flight-changes new badge" data-badge-caption="">Пересадок ${ticket.transfers}</span>
                        </div>

                        <div class="ticket-price">
                            <span class="ticket-price-number">${ticket.price}</span>
                            <span class="ticket-price-currency">${currency}</span>
                        </div>
                    </div>

                    <div class="ticket-destionation">
                        <div class="ticket-location"> ${ticket.destination_name} </div>
                    </div>

                </div>
            </div>
        </div>`

                        return template;
    }
}

const ticketsUI = new TicketsUI(CurrencyUI);

export default ticketsUI;