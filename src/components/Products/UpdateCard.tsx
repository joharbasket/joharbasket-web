//components/Products/UpdateCard.tsx

"use client";
import { Image } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { FiFile } from "react-icons/fi";
import { FcHighPriority } from "react-icons/fc";
import FileUpload from "../FileUpload";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Icon,
  Textarea,
  Select,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { getStringBetween } from "@/lib/utils";
import { useAppDispatch } from "@/lib/store";
import { getProduct } from "@/lib/features/products/productSlice";
import { useAppSelector } from "@/lib/hooks";
import { Product } from '@/lib/types';
import { AddIcon } from "@chakra-ui/icons";

interface IFormInput {
  name: string;
  description: string;
  file?: File;
  inStock: number;
  price: number;
  discountedPrice: number;
  isFeatured: boolean;
  size: string;
  subCategory: string;
  category: string;
}

interface CategoryData {
  category: string;
  subCategories: Set<string>;
}

export default function UpdateCard({
  collection,
  id,
}: {
  collection: string;
  id: string;
}) {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const single = useAppSelector((state) => state.productReducer.single);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [categories, setCategories] = useState<Map<string, Set<string>>>(new Map());
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [showNewSubCategory, setShowNewSubCategory] = useState(false);

  useEffect(() => {
    dispatch(getProduct({ id, collection }));
  }, [dispatch, id, collection]);

  // Extract unique categories and subcategories from products
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/api/products/${collection}`);
        const products: Product[] = response.data;
        
        const categoryMap = new Map<string, Set<string>>();
        
        products.forEach((product) => {
          if (product.category) {
            if (!categoryMap.has(product.category)) {
              categoryMap.set(product.category, new Set());
            }
            if (product.subCategory) {
              categoryMap.get(product.category)?.add(product.subCategory);
            }
          }
        });

        setCategories(categoryMap);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [collection]);

  const UpdateForm = () => {
    const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
    } = useForm<Product>({
      defaultValues: {
        ...single,
      },
    });

    const watchCategory = watch("category");

    const onSubmit = async (data: Product) => {
      setLoading(true);
      const paths = getStringBetween(pathname);
      const sub = paths[2];
      const _id = paths[3];

      const updateData = selectedCollection 
        ? { ...data, toCollection: selectedCollection }
        : data;

      try {
        await axios.patch(`/api/products/${sub}/${_id}`, updateData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        toast({
          title: "Success",
          description: "Product updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        router.push(`/products/${collection}`);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to update product",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
        onClose();
      }
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Flex direction={["column", "row"]} gap={6}>
            {/* Left Column */}
            <Box flex="1">
              <Flex direction="column" align="center">
                <Image 
                  src={single?.imageUrl} 
                  boxSize="250px" 
                  alt={single?.name || "Product"} 
                  mb={4} 
                />
                
                <Box mb={4}>
                  <label className="flex items-center">
                    <span className="mr-3">Featured Product</span>
                    <input
                      type="checkbox"
                      {...register("isFeatured")}
                      className="form-checkbox"
                    />
                  </label>
                </Box>

                <FileUpload accept={"image/*"} register={register("imageUrl")}>
                  <Button leftIcon={<Icon as={FiFile} />}>Upload Image</Button>
                </FileUpload>
              </Flex>
            </Box>

            {/* Right Column */}
            <Box flex="2">
              <Flex direction="column" gap={4}>
                <FormControl>
                  <label>Name</label>
                  <input
                    {...register("name")}
                    className="form-input"
                  />
                </FormControl>

                <FormControl>
                  <label>Size</label>
                  <input
                    {...register("size")}
                    className="form-input"
                  />
                </FormControl>

                <FormControl>
                  <label>Price</label>
                  <input
                    type="number"
                    {...register("price")}
                    className="form-input"
                  />
                </FormControl>

                <FormControl>
                  <label>Discounted Price</label>
                  <input
                    type="number"
                    {...register("discountedPrice")}
                    className="form-input"
                  />
                </FormControl>

                <FormControl>
                  <label>Stock</label>
                  <NumberInput min={0}>
                    <NumberInputField {...register("inStock")} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <label>Category</label>
                  <Flex gap={2}>
                    {!showNewCategory ? (
                      <Select
                        {...register("category")}
                        placeholder="Select Category"
                      >
                        {Array.from(categories.keys()).map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                        <option value="new">+ Add New Category</option>
                      </Select>
                    ) : (
                      <InputGroup>
                        <Input
                          placeholder="Enter new category"
                          onChange={(e) => {
                            setValue("category", e.target.value);
                            setShowNewCategory(false);
                            categories.set(e.target.value, new Set());
                          }}
                        />
                        <InputRightElement>
                          <Button
                            size="sm"
                            onClick={() => setShowNewCategory(false)}
                          >
                            <AddIcon />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    )}
                  </Flex>
                </FormControl>

                <FormControl>
                  <label>Subcategory</label>
                  <Flex gap={2}>
                    {!showNewSubCategory ? (
                      <Select
                        {...register("subCategory")}
                        placeholder="Select Subcategory"
                        isDisabled={!watchCategory}
                      >
                        {watchCategory && Array.from(categories.get(watchCategory) || []).map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                        <option value="new">+ Add New Subcategory</option>
                      </Select>
                    ) : (
                      <InputGroup>
                        <Input
                          placeholder="Enter new subcategory"
                          onChange={(e) => {
                            setValue("subCategory", e.target.value);
                            setShowNewSubCategory(false);
                            if (watchCategory) {
                              const subCats = categories.get(watchCategory) || new Set();
                              subCats.add(e.target.value);
                              categories.set(watchCategory, subCats);
                            }
                          }}
                        />
                        <InputRightElement>
                          <Button
                            size="sm"
                            onClick={() => setShowNewSubCategory(false)}
                          >
                            <AddIcon />
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    )}
                  </Flex>
                </FormControl>

                <FormControl>
                  <label>Move to Collection</label>
                  <Select
                    placeholder={collection.charAt(0).toUpperCase() + collection.slice(1)}
                    value={selectedCollection || ""}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                  >
                    {["grocery", "cosmetics", "pooja", "stationary"]
                      .filter(cat => cat !== collection)
                      .map(cat => (
                        <option key={cat} value={cat}>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))
                    }
                  </Select>
                </FormControl>

                <FormControl>
                  <label>Description</label>
                  <Textarea {...register("description")} />
                </FormControl>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3} isLoading={loading}>
            Save Changes
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    );
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    const paths = getStringBetween(pathname);
    try {
      await axios.delete(`/api/products/${paths[2]}/${paths[3]}`);
      toast({
        title: "Success",
        description: "Product deleted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/products/grocery");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete product",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setDeleteLoading(false);
      onCloseDelete();
    }
  };

  if (!single) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <Flex justify="center" align="center" height="80vh">
        <Flex
          direction="column"
          align="center"
          bg="white"
          rounded="3xl"
          p={6}
          boxShadow="lg"
          width={["90%", "70%", "50%"]}
        >
          <Box mb={4}>
            <Image src={single.imageUrl} boxSize="250px" alt={single.name} />
          </Box>
          
          <Flex direction="column" align="start" width="100%">
            <Heading as="h2" size="md" mb={2}>{single.name}</Heading>
            <Text><strong>Size:</strong> {single.size}</Text>
            <Text><strong>Price:</strong> ₹{single.price}</Text>
            <Text><strong>Discounted:</strong> ₹{single.discountedPrice}</Text>
            <Text><strong>Stock:</strong> {single.inStock}</Text>
            <Text><strong>Category:</strong> {single.category}</Text>
            <Text><strong>Sub Category:</strong> {single.subCategory}</Text>
          </Flex>

          <Flex mt={4} width="100%" justify="space-between">
            <Button colorScheme="blue" width="48%" onClick={onOpen}>
              Update
            </Button>
            <Button colorScheme="red" width="48%" onClick={onOpenDelete}>
              Delete
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Update Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <UpdateForm />
        </ModalContent>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={isOpenDelete} onClose={onCloseDelete} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={4} align="center">
              <Icon as={FcHighPriority} boxSize={8} />
              <Text fontSize="lg">Are you sure you want to delete this product?</Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseDelete}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={handleDelete}
              isLoading={deleteLoading}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
