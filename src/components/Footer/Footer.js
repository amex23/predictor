import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  Form,
  Formik,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Box
        color={useColorModeValue('white')}
        bg={useColorModeValue('green')}
        px={4}
      >
        <Flex padding={5} justifyContent={'center'}>
          <Link paddingStart="5" paddingEnd="5">
            Contact Us
          </Link>
          <Link paddingStart="5" paddingEnd="5">
            Privacy Policy
          </Link>
          <Link paddingStart="5" paddingEnd="5">
            Terms of Use
          </Link>
          <Link paddingStart="5" paddingEnd="5">
            How it Works
          </Link>
          <Link paddingStart="5" paddingEnd="5">
            FAQs
          </Link>
          <Link paddingStart="5" paddingEnd="5">
            Blogs
          </Link>
        </Flex>

        <Flex
          paddingStart="20"
          paddingEnd="20"
          paddingBottom="10"
          paddingTop="18"
        >
          <Box w="50%">
            <Flex flexDirection="column" marginEnd="15">
              <Heading as="h3" size="lg" paddingBottom="3">
                Disclaimer
              </Heading>
              <Text fontSize="sm">
                The Predictor website (“Site”) is for informational and
                educational purposes only. The Site displays existing markets
                deployed on the Polygon blockchain and is a graphical user
                interface for both visualizing data from on-chain activity and
                interacting with smart contracts directly from your own Polygon
                wallet. Adventure One QSS Inc. takes no custody of users' crypto
                assets and does not host any markets. None of the material on
                the Site is intended to be, nor does it constitute, a
                solicitation, recommendation or offer to buy or sell any
                security, commodity interest, derivative, financial product or
                instrument. Users are responsible for complying with all
                applicable laws and should conduct their own analysis and
                consult with professional advisors prior to entering into any
                smart contracts. Trading is not available to Restricted Persons,
                including US Persons. See our Terms of Use.
              </Text>
            </Flex>
          </Box>

          <Box w="50%">
            <Box>
              <Heading as="h4" size="md">
                Subcribe to our newsletter
              </Heading>
              <Box paddingTop="3">
                <form>
                  <label>
                    <input
                      className="email"
                      type="text"
                      placeholder="Email Address"
                    />
                  </label>
                  <input
                    className="btn-submit"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </Box>
            </Box>

            <Box paddingTop="8">
              <Heading as="h3" size="lg" paddingBottom="3">
                Bet on your beliefs
              </Heading>
              <Text fontSize="sm">
                Polymarket is a decentralized information markets platform,
                harnessing the power of free markets to demystify the real world
                events that matter most to you.
              </Text>
              <div className="flex justify-center bg-red-200">
                <p>sdsdsd</p>
              </div>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
