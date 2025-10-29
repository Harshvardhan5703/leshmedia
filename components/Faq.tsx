import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is this only for big brands or companies?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Not at all! Whether you're building your brand from scratch or already established and looking to scale, our strategies are tailored to meet you where you are and take you where you want to go.
          </p>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the payment terms? </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           We work on an advance payment model with two flexible options: <br />
           <span className="font-bold underline" >Option 1: </span>
Full payment in advance for each month <br />
<span className="font-bold underline" >Option 2: </span> 50% at the start of the month, 50% mid-month <br />
<p className="font-bold " >Choose what works best for your cash flow!</p>


          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a guarantee?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            While we can't promise specific metrics, what we do guarantee is our proven process, dedicated team, and complete commitment to growing your brand.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default function Faq() {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-20">
      <h2 className="text-4xl font-extrabold mb-10">Frequently Asked Questions</h2>
      <div className="w-3/5">
        <FAQs />
      </div>
    </div>
  )
}