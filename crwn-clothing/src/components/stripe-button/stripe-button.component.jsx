import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price}) => {
 const priceForStripe = price * 100;
 const publishableKey='pk_test_51GzEqRHqlaebfhynKZn4Si3orKS4MDalnM1xskhQT0SHgC5sOHOFUhkhovGMfGwnStbcAPVESOFfjeSVe22C1YDp00mSkDArMs';

 const onToken = token => {
     console.log(token);
     alert('payment successful')
 }

 return(
     <StripeCheckout 
     label='Pay Now'
     name='CRWN Clothing Ltd.'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />
 )

}

export default StripeCheckoutButton;